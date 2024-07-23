const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://abhishekp492002:guddup49@login.xtuioku.mongodb.net/sample_mflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  age: { type: Number, required: true },
  add: { type: String, required: true },
  sym: { type: String, required: false }
});


const User = mongoose.model('User', userSchema, 'USERS'); 

app.get('/', async (req, res) => {
  try {
    const users = await User.find({}).exec(); 
    res.render('index', { UserList: users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});