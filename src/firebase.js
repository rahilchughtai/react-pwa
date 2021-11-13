import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



export const firebaseConfig = {
    apiKey: "AIzaSyCljKAgXZC9JLsbHE-SrYigBecuigs2p-Q",
    authDomain: "chat-app-20a27.firebaseapp.com",
    projectId: "chat-app-20a27",
    storageBucket: "chat-app-20a27.appspot.com",
    messagingSenderId: "756304603524",
    appId: "1:756304603524:web:6f09db007b4128271f95d1"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const FireDb = getFirestore(firebaseApp);
