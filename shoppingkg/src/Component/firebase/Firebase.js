import { getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
  // ///////////////////////////////auth
  // // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6lTsiZ4uZOPyUgS_1LHnuzpcdOIVeBk",
    authDomain: "texnoauth.firebaseapp.com",
    projectId: "texnoauth",
    storageBucket: "texnoauth.appspot.com",
    messagingSenderId: "85721086915",
    appId: "1:85721086915:web:c1b2e439a527e310131b76"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
    // ///////////////////////////////auth
  