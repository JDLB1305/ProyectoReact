// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlxeQ7on8ZCsRlZ59Uuk-5GpNT81HJnl8",
  authDomain: "react-ecommerce-5582d.firebaseapp.com",
  projectId: "react-ecommerce-5582d",
  storageBucket: "react-ecommerce-5582d.firebasestorage.app",
  messagingSenderId: "722033466725",
  appId: "1:722033466725:web:21b383132b6bd7812a158c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db