// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7EL7d20d-u7WMUVhda31XM2rjumYH1aw",
    authDomain: "react-disney-18b2d.firebaseapp.com",
    projectId: "react-disney-18b2d",
    storageBucket: "react-disney-18b2d.appspot.com",
    messagingSenderId: "35268777865",
    appId: "1:35268777865:web:0a229cd20c833a496a7358",
    measurementId: "G-GWK9W9JFG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;