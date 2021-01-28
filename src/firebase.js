import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHsaxBkDaEigN3o1DBB5Cmncn9E0NV0gg",
    authDomain: "remit-b5879.firebaseapp.com",
    projectId: "remit-b5879",
    storageBucket: "remit-b5879.appspot.com",
    messagingSenderId: "633780537284",
    appId: "1:633780537284:web:fb9a73aa25a186b7c38691",
    measurementId: "G-40JQPMLS3Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };