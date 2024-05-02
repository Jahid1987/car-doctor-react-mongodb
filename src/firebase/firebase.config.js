// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARXdnxvC5GEOjDrXaZ-17003EvXqjMUYg",
  authDomain: "car-doctor-7689a.firebaseapp.com",
  projectId: "car-doctor-7689a",
  storageBucket: "car-doctor-7689a.appspot.com",
  messagingSenderId: "514898301623",
  appId: "1:514898301623:web:220a87fada534e95083332",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
