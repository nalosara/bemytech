const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser) {
      return res.json({
        success: false,
        message: 'This email is already in use, try signing in.',
      });
    }

    const user = await User({
      email,
      password,
    });

    // Save the user to the database
    await user.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d', // Token expiration time
    });

    res.json({
      success: true,
      user: user, // Include the user in the response if needed
      token: token,
    });

  } catch (error) {
    res.json({
      success: false,
      message: 'User registration failed',
      error: error.message,
    });
  }
};


exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);

  if (!user)
    return res.json({
      success: false,
      message: 'User with the given email not found!',
    });

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return res.json({
      success: false,
      message: 'email / password does not match!',
    });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  let oldTokens = user.tokens || [];

  if (oldTokens.length) {
    oldTokens = oldTokens.filter(t => {
      const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
      if (timeDiff < 86400) {
        return t;
      }
    });
  }

  await User.findByIdAndUpdate(user._id, {
    tokens: [...oldTokens, { token, signedAt: Date.now().toString() }],
  });

  const userInfo = {
    email: user.email,
    avatar: user.avatar ? user.avatar : '',
  };

  res.json({ success: true, user: userInfo, token });
};

exports.signOut = async (req, res) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Authorization fail!' });
    }

    const tokens = req.user.tokens;

    const newTokens = tokens.filter(t => t.token !== token);

    await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
    res.json({ success: true, message: 'Sign out successfully!' });
  }
};