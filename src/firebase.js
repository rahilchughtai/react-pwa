import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"

export const firebaseConfig = {
/** */
};


export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const FireDb = getFirestore(firebaseApp);
