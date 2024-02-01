import Logo from '/src/assets/medicine.png'
import styles from '/src/login/Login.module.css'





function Login(){
    return(
        <>
        <div className={styles.loginPage}>
            <img className={styles.medLogo} src={Logo} alt='Logo'></img>
            <h2 className={styles.centerItems}>Login</h2>
            <form action="#" method="POST">
                <div className={styles.centerItems}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email: </label><br></br>
                    <input type="text" id="email" name="email" required/><br></br>
                </div>
                </div>
                <div className={styles.centerItems}>
                <div className={styles.formGroup}>
                <label htmlFor="password">Password: </label><br></br>
                <input type="password" id="password" name="password" required/>
                </div>
                </div>
                
                <div className={styles.loginButton}>
                <button type='submit' onClick={(event) => gather(event)}>Login</button>
                </div>
            </form>  

            
           

        </div>
        </>
    );



}

function gather(event){
    event.preventDefault();
    var username = document.getElementById("email").value;
    var passord = document.getElementById("password").value;
    console.log(username);
    console.log(passord);
    run(username,passord);
}
async function run(username,passord) {
    <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
    const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
    const url = "mongodb+srv://abhishekp492002:RWfwnexVGRDoGDN0@login.kyro35f.mongodb.net/";
    const client = new MongoClient(url);
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



export default Login