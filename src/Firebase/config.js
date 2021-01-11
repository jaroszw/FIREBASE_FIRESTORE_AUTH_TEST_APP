import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_KEY,
  authDomain: 'functions-test-15819.firebaseapp.com',
  projectId: 'functions-test-15819',
  storageBucket: 'functions-test-15819.appspot.com',
  messagingSenderId: '630773550333',
  appId: '1:630773550333:web:5d2821a6fa36a4336f4294',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
