import React  from 'react';

import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState, useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCyzdENca42jZFwXbnOqd_oPzIjSi4ytkU",

  authDomain: "superchatapp-15301.firebaseapp.com",

  projectId: "superchatapp-15301",

  storageBucket: "superchatapp-15301.appspot.com",

  messagingSenderId: "1061234463943",

  appId: "1:1061234463943:web:32bf34fe7c5e17d50b9ae2",

  measurementId: "G-GEBB5NW3EF"


})
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header >

      </header>
      <section>
        {user ? <chatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}
function SignIn() {
  const SignInWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={useSignInWithGoogle}>Sign in with Google</button>
  )
}
function chatRoom() {

  
}

export default App;
