const express = require('express');
require('dotenv').config();
require('./db/index');
const userRouter = require('./routers/userRouter');

const User = require('./models/user');

const app = express();
app.use(express.json());
app.use("/api", userRouter);
// testing 
// app.get('/', (req, res) => {
//   res.json({ success: true, message: 'Welcome to backend zone!' });
// });

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
    

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});