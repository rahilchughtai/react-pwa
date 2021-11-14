
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import './SignIn.css'
import { Button } from '../../styledComponents/btnStyles';

export const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
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
