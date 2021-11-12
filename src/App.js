import React, { useState, useRef } from 'react';
import dhbwLogo from './assets/dhbwCoolersvg.svg'
import './App.css';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"
import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from './firebase';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        <h1> DHBW Chat App </h1>
        <img src={dhbwLogo} className="App-logo" alt="logo" />
      </header>

      <main>
        {user ? 'User is signed in :)' : <SignIn />}
      </main>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
