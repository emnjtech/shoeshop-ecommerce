
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7iWqHJLFs754HCKCVny5Ni37kNYKN6v0",
    authDomain: "shoeshop-e573f.firebaseapp.com",
    projectId: "shoeshop-e573f",
    storageBucket: "shoeshop-e573f.appspot.com",
    messagingSenderId: "589394785896",
    appId: "1:589394785896:web:575af17aa0f85711826ddd"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

