import './App.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { AppHeader } from './components/AppHeader/AppHeader';
import { ChatRoom } from './components/ChatRoom/ChatRoom';
import React from 'react';
import { SignIn } from './components/AppSignIn/SignIn';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  const isUserSignedIn = user ? true : false

  return (
    <div className="App">
      <AppHeader userSignedIn={isUserSignedIn} />
      <section>
        {isUserSignedIn ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}



export default App;
