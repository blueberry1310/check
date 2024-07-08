// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG6HoYks4DGpZPHZ1YB22g7lhAmhJo9Ww",
  authDomain: "check-61db4.firebaseapp.com",
  databaseURL: "https://check-61db4-default-rtdb.firebaseio.com",
  projectId: "check-61db4",
  storageBucket: "check-61db4.appspot.com",
  messagingSenderId: "586334219792",
  appId: "1:586334219792:web:8a2f5116ecaf1b02fea495",
  measurementId: "G-EC5EFN6507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };