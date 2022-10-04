// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXbvxzxVNrqtWfnFx2IWPGfsyyS5qKG9w",
    authDomain: "slack-clone-67615.firebaseapp.com",
    projectId: "slack-clone-67615",
    storageBucket: "slack-clone-67615.appspot.com",
    messagingSenderId: "914840658041",
    appId: "1:914840658041:web:974d0f69266bc5d69f34a8",
    measurementId: "G-WV1B03JCE9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;