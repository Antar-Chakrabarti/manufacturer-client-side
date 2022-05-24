import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,


    /* apiKey: "AIzaSyCZ_XeBaaGa9QyXtlPadhEIRScPyPQzlMs",
    authDomain: "last-assignment-c7762.firebaseapp.com",
    projectId: "last-assignment-c7762",
    storageBucket: "last-assignment-c7762.appspot.com",
    messagingSenderId: "676785159029",
    appId: "1:676785159029:web:7728e6a0b5900b1cc6313c", */
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;