import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
// import { getDatabase, ref, child, get } from 'firebase/database';

// firebase key id
import { FIREBASE_API_KEY } from '../../.firebase/firebaseKeyId';

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'clonedcard-3a621.firebaseapp.com',
  projectId: 'clonedcard-3a621',
  storageBucket: 'clonedcard-3a621.appspot.com',
  messagingSenderId: '527773406039',
  appId: '1:527773406039:web:37fb1bf41da29cd52c2412'
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const ref = db.collection('aside').doc('i1j58xulOh6DvqmDWCWd');
// ref.get().then((doc) => {
//   console.log(doc.data());
// });
export { firebase };
