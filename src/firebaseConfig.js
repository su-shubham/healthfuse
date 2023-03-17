// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Yph8fzi3JuTJbxxVTMTpo-WR21VFfZo",
  authDomain: "fir-authentication-eb6f9.firebaseapp.com",
  projectId: "fir-authentication-eb6f9",
  storageBucket: "fir-authentication-eb6f9.appspot.com",
  messagingSenderId: "143514865763",
  appId: "1:143514865763:web:886ca85b5d2f090406a856",
  measurementId: "G-BB3NBE7PXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default  firebaseConfig;