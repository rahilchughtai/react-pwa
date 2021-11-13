import React, { useState, useRef } from 'react';
import dhbwLogo from './assets/dhbwCoolersvg.svg'
import './App.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import { SignIn } from './components/SignIn/SignIn';
import { ChatRoom } from './components/ChatRoom/ChatRoom';




function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        <img src={dhbwLogo} className="App-logo" alt="logo" />
        <h1> DHBW Chat App </h1>
      </header>

      <main>
        {user ? <ChatRoom /> : <SignIn />}
      </main>
    </div>
  );
}


/*
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}*/

export default App;
