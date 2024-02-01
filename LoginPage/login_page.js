const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const url = "mongodb+srv://abhishekp492002:RWfwnexVGRDoGDN0@login.kyro35f.mongodb.net/";
const client = new MongoClient(url);
async function run(username,passord) {
  try {
    const database = client.db('CREDENTIALS');
    const doctors = database.collection('doc-login');
    // Auth for doctors collection
    const query = { NAME : username };
    const user = await doctors.findOne(query);
    if(user.Password==passord){
      console.log("Login Successful");
    }
    else{
      console.log("Login Failed");
    }
  }
  catch(err) {
    console.log(err);
  }
  
    
   finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
function gather(e){
  e.preventDefault();
  var username = document.getElementById("username").value;
  var passord = document.getElementById("password").value;
  console.log(email);
  console.log(passord);
  run(username,passord);
}
