import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5u6LB3ve-RJBfpxy7stZeHK4Jog3yQNs",
    authDomain: "dnut-479c6.firebaseapp.com",
    projectId: "dnut-479c6",
    databaseURL: "https://dnut-479c6-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "dnut-479c6.appspot.com",
    messagingSenderId: "255831896428",
    appId: "1:255831896428:web:fffae069a98d08d2364349",
    measurementId: "G-1V25K468HY",
  };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    export default auth;
