
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import './SignIn.css'
import { Button, BtnSpan } from '../../styledComponents/btnStyles';

export const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return (
        <div className="SignIn">
            <div>
                <Button className="btn-sign-in" onClick={signInWithGoogle} >
                    <BtnSpan>
                        Sign in with Google
                    </BtnSpan>
                </Button>
            </div>
        </div>
    )
}
