// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxxZCkEGDgmUcwUGsv8Xz65a9_9rsD1V4",
  authDomain: "bhojnam-e3fca.firebaseapp.com",
  projectId: "bhojnam-e3fca",
  storageBucket: "bhojnam-e3fca.appspot.com",
  messagingSenderId: "150903331683",
  appId: "1:150903331683:web:3710cf73a14da67a25d156",
  measurementId: "G-W6190RHKP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();