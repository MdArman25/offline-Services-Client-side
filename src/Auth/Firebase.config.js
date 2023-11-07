import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk2dMvtGs6HaLwFStuCxowrRV0YpZIf98",
  authDomain: "assignment-11-a38be.firebaseapp.com",
  projectId: "assignment-11-a38be",
  storageBucket: "assignment-11-a38be.appspot.com",
  messagingSenderId: "521436363063",
  appId: "1:521436363063:web:16bc959e90c240ec4402b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth