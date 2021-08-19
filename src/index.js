import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBh_TU9Ft9MePjzOcV6zxt0hWrsrZoVdZI",
  authDomain: "cart-dc96d.firebaseapp.com",
  projectId: "cart-dc96d",
  storageBucket: "cart-dc96d.appspot.com",
  messagingSenderId: "460175202796",
  appId: "1:460175202796:web:488eb9aa29edfe9641c8c9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
