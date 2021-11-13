
import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase';



export const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return (
        <div>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
