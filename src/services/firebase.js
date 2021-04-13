import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTxMPpvXuG584oztSK851UzPlEJw67eRc",
  authDomain: "todo-list-firebase-51b69.firebaseapp.com",
  projectId: "todo-list-firebase-51b69",
  storageBucket: "todo-list-firebase-51b69.appspot.com",
  messagingSenderId: "884853746548",
  appId: "1:884853746548:web:daf465ef095c5521ca1a21",
  measurementId: "G-5CCQSB8EPS",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore();

export default firebase;