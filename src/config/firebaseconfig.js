// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzJ-GzTK9tilxJyHI0rLMOAGpP6Ij6lmQ",
    authDomain: "loginorsignup-123.firebaseapp.com",
    projectId: "loginorsignup-123",
    storageBucket: "loginorsignup-123.appspot.com",
    messagingSenderId: "838664947038",
    appId: "1:838664947038:web:124a821b3f4300483abbcf",
    measurementId: "G-PF39Q185JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;