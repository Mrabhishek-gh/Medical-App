// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvkRLN1Kt04DPLd6d3a6s_bWbxG717F6k",
  authDomain: "medical-app-sign-up.firebaseapp.com",
  projectId: "medical-app-sign-up",
  storageBucket: "medical-app-sign-up.appspot.com",
  messagingSenderId: "1001176669564",
  appId: "1:1001176669564:web:9997104e8e6c3cb17cd8f9"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Getting objects of HTML
var Username = document.getElementById("Username");
var Email = document.getElementById("Email");
var Number = document.getElementById("Number");
var message = document.getElementById("message");
var symptoms = document.getElementById("symptoms");

// Create a function for user signup
function signup(e) {
  e.preventDefault();

  var email = Email.value;
  var password = "password"; // You should set a proper password here.

  // Use createUserWithEmailAndPassword to create a new user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully signed up
      var user = userCredential.user;
      alert("Signup Successful");
      console.log(user);
    })
    .catch((error) => {
      // Handle signup errors
      alert("Error: " + error.message);
    });

  console.log(email, password);
}

const form = document.getElementById("myForm");
form.addEventListener("submit", signup);
