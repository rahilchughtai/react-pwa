import React from 'react';
import './App.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import { SignIn } from './components/SignIn/SignIn';
import { ChatRoom } from './components/ChatRoom/ChatRoom';
import { AppHeader } from './components/AppHeader/AppHeader';
import { Button, BtnSpan } from './styledComponents/btnStyles'


function App() {
  const [user] = useAuthState(auth)

  const isUserSignedIn = user ? true : false

  return (
    <div className="App">
      <AppHeader userSignedIn={isUserSignedIn} />
      <main>
        {isUserSignedIn ? <ChatRoom /> : <SignIn />}
        {console.log("signed in variable", isUserSignedIn)}
      </main>
    </div>
  );
}



export default App;
