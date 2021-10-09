import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdaPvukV_hbtqBk--a-0MlthQ6AxJfdSk",
    authDomain: "linkedin-clone-cb1b8.firebaseapp.com",
    projectId: "linkedin-clone-cb1b8",
    storageBucket: "linkedin-clone-cb1b8.appspot.com",
    messagingSenderId: "994966284222",
    appId: "1:994966284222:web:75a8a64f9a2fe3b95dfbef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }