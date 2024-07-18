const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3002
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
    number: String,
    age: String,
    add: String,
    sym: String
}, { collection: 'USERS' });

const Note = mongoose.model("Note", dataSchema);


app.use(express.static(__dirname))



app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'HOME.html'))
})


app.post("/", function (req, res) {

    let newNote = new Note({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        age:req.body.age,
        add:req.body.add,
        sym:req.body.sym
    })
    newNote.save();
    res.redirect("/");
    
})

app.listen(port,()=>{
    console.log("Server started at "+ port)
})