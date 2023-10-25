// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMZQPzdPW_UwxJC97y-WsIyr623as5atU",
    authDomain: "rick-and-morty-969e2.firebaseapp.com",
    projectId: "rick-and-morty-969e2",
    storageBucket: "rick-and-morty-969e2.appspot.com",
    messagingSenderId: "532525809567",
    appId: "1:532525809567:web:638e8b4e88b605b2d907aa"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase