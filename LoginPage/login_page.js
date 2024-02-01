
const jsdom = require('jsdom')

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const url = "mongodb+srv://abhishekp492002:RWfwnexVGRDoGDN0@login-id.jocjuex.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function run(username,passord) {
  try {
    const database = client.db('doc-login');
    const doctors = database.collection('login-data');
    // Query for a movie that has the title 'Back to the Future'
    const query = { NAME : "Dr Abhishek Ghosh" };
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
run();

