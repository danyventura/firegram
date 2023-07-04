/* eslint-disable no-unused-vars */
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_phiE9N7QJxqYWNFEfs714WukSq2iftM',
  authDomain: 'firegram-c4bb6.firebaseapp.com',
  projectId: 'firegram-c4bb6',
  storageBucket: 'firegram-c4bb6.appspot.com',
  messagingSenderId: '130168749480',
  appId: '1:130168749480:web:eaa08d581155eb695c319d',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
