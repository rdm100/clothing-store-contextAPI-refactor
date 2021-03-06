import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwRGhSyZ-8Lzv3obJbjbD2Yy-aK9-9EhQ",
  authDomain: "clothing-db-2c215.firebaseapp.com",
  projectId: "clothing-db-2c215",
  storageBucket: "clothing-db-2c215.appspot.com",
  messagingSenderId: "1074673898120",
  appId: "1:1074673898120:web:c7a9344e043dee76dcc53d",
  measurementId: "G-3DMJBHPSNM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  // console.log(firestore.doc('users/128fdashadu'));
  // console.log(snapshot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;