import React from 'react';
import './App.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import { SignIn } from './components/SignIn/SignIn';
import { ChatRoom } from './components/ChatRoom/ChatRoom';
import { AppHeader } from './components/AppHeader/AppHeader';


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
