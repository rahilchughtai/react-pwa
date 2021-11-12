import React, { useState, useRef } from 'react';
import dhbwLogo from './assets/dhbwCoolersvg.svg'
import './App.css';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"
import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { firebaseConfig } from './firebase';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        <img src={dhbwLogo} className="App-logo" alt="logo" />
        <h1> DHBW Chat App </h1>
      </header>

      <main>
        {user ? <h2>User has signed in :)</h2> : <SignIn />}
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
    <><button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button></>
  )

}

/*
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}*/

export default App;
