import * as firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC2PwZcsXr8piyhr13W8MOFAAnhLVHcEsQ",
  authDomain: "hybrid-mobile-apps-task3-67a59.firebaseapp.com",
  databaseURL: "https://hybrid-mobile-apps-task3-67a59.firebaseio.com",
  projectId: "hybrid-mobile-apps-task3-67a59",
  storageBucket: "hybrid-mobile-apps-task3-67a59.appspot.com",
  messagingSenderId: "198095518559",
  appId: "1:198095518559:web:925a9a9cf475c9ce2914ea",
  measurementId: "G-R6TJ2BF7FS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;