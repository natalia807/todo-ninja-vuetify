import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQtCyMVM7AryK-4S0ybpuXDgvTweDwSHI",
    authDomain: "todo-ninja-2ee37.firebaseapp.com",
    projectId: "todo-ninja-2ee37",
    storageBucket: "todo-ninja-2ee37.appspot.com",
    messagingSenderId: "982619863306",
    appId: "1:982619863306:web:1f4252e5ed57036d0de2f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;