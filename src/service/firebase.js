// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAknOekp9IgLXBu1J0WW-NknjdPj5xI-4o",
  authDomain: "e-commerce-pouh.firebaseapp.com",
  projectId: "e-commerce-pouh",
  storageBucket: "e-commerce-pouh.appspot.com",
  messagingSenderId: "854372764790",
  appId: "1:854372764790:web:7997b4428904bd58b8e357",
  measurementId: "G-CN7LWC5PLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export default db