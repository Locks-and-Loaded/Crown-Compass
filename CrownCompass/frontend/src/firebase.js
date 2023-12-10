// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaZAJefyD__51oZNluU5QxL3fuYHfhq1U",
    authDomain: "crown-compass.firebaseapp.com",
    projectId: "crown-compass",
    storageBucket: "crown-compass.appspot.com",
    messagingSenderId: "60702292731",
    appId: "1:60702292731:web:4bf78c94a783c353cf0e5e",
    measurementId: "G-G9T8XTWF8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);