const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://abhishekp492002:RWfwnexVGRDoGDN0@login-id.jocjuex.mongodb.net/";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('doc-login');
    const doctors = database.collection('login-data');
    // Query for a movie that has the title 'Back to the Future'
    const query = { NAME : "Dr Abhishek Ghosh" };
    const user = await doctors.findOne(query);
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);