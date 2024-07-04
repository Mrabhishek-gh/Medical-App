const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const User = require('./user');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname))

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://abhishekp492002:guddup49@login.xtuioku.mongodb.net/sample_mflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'login_page.html'));
});

app.post('/login_page', async (req, res) => {
    const { name, password } = req.body;

    try {
        // Check if user exists in database
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).send('User not found');
        }

        if (user.password !== password) {
            console.log("Unsuccessful")
            return res.status(401).send('Invalid password');
            
        }

        // Authentication successful
        res.redirect('http://127.0.0.1:5500/HOME.html');
        console.log("Succesfull");
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});