

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_Peghl9TzW4yXYZ5H3Z9X-m8SXyfqGtg",
  authDomain: "todoapp-37fc0.firebaseapp.com",
  databaseURL: "https://todoapp-37fc0.firebaseio.com",
  projectId: "todoapp-37fc0",
  storageBucket: "todoapp-37fc0.appspot.com",
  messagingSenderId: "734584465559",
  appId: "1:734584465559:web:6900212dc01c797d13e1d2",
  measurementId: "G-XVJSYCW3Y6"
});

const db = firebaseApp.firestore();
//const auth = firebase.auth();

export default db;
