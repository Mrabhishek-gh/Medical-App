const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3000
const bodyParser = require('body-parser')



const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://abhishekp492002:guddup49@login.xtuioku.mongodb.net/sample_mflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { collection: 'USER DATABASE' });

const Note = mongoose.model("Note", dataSchema);


app.use(express.static(__dirname))



app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})


app.post("/", function (req, res) {

    let newNote = new Note({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    newNote.save();
    res.redirect("/");
    
})

app.listen(port,()=>{
    console.log("Server started")
})