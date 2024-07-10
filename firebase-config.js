// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLISxhOfwOXmWSirhWIfjALqJ2esnikiU",
    authDomain: "checkproj-51298.firebaseapp.com",
    projectId: "checkproj-51298",
    storageBucket: "checkproj-51298.appspot.com",
    messagingSenderId: "321645067649",
    appId: "1:321645067649:web:b150afa5b655a54e32fc80",
    measurementId: "G-1EWZKH67MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
