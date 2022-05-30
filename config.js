import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA2wkrg1n7Gkdof0CxNPqJfoF91Xh_f0M4",
    authDomain: "project-47f14.firebaseapp.com",
    projectId: "project-47f14",
    storageBucket: "project-47f14.appspot.com",
    messagingSenderId: "1014561869398",
    appId: "1:1014561869398:web:ea7637f5b6ead8101775f7"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
