import './SignIn.css'

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

import { Button } from '../../styledComponents/btnStyles';
import React from 'react';
import { auth } from '../../firebase';

export const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider).catch((error) => {
            const { code, message } = error
            document.write(message)
            console.log(code, message)
        });
    }

    return (
        <div className="SignIn">
            <div>
                <Button className="btn-sign-in" onClick={signInWithGoogle} >
                    <span>
                        Sign in with Google
                    </span>
                </Button>
            </div>
        </div>

    )
}
