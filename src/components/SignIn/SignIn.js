
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import './SignIn.css'
import GoogleButton from 'react-google-button'

export const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return (
        <div className="SignIn">
            <div>
                <button className="button-64" onClick={signInWithGoogle} >
                    <span class="text">Sign in with Google</span>
                </button>
            </div>
        </div>
    )
}
