
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvW5Dco72WXKtBYDvetm1DuHwGT89buXY",
  authDomain: "link-share-app-3e020.firebaseapp.com",
  projectId: "link-share-app-3e020",
  storageBucket: "link-share-app-3e020.appspot.com",
  messagingSenderId: "791188074570",
  appId: "1:791188074570:web:450c2315aff52efe0df6b3",
  measurementId: "G-3VWHE0YBWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();



const signOutBtn = document.getElementById('sign-out');

signOutBtn.addEventListener('click', function (event) {
  event.preventDefault();
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('sign outt');
    window.location.href = "index.html"
  }).catch((error) => {
    // An error happened.
    alert('asdasd')
  });
});

// signout
