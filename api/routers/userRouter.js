const express = require('express');

const router = express.Router();
const {
  createUser,
  userSignIn,
  uploadProfile,
  signOut,
} = require('../controllers/userController');
const { isAuth } = require('../middleware/auth');
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
} = require('../middleware/validation/userValidation');

router.post('/sign-up', validateUserSignUp, userVlidation, createUser);
router.post('/log-in', validateUserSignIn, userVlidation, userSignIn);
router.post('/log-out', isAuth, signOut);


module.exports = router;