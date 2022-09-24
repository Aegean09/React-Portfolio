import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAX2NP06cy_jHH054g_p-sOsH7ZGzxEuYY",
  authDomain: "ege-durmaz.firebaseapp.com",
  projectId: "ege-durmaz",
  storageBucket: "ege-durmaz.appspot.com",
  messagingSenderId: "14973781094",
  appId: "1:14973781094:web:fd1c4301897272d69999a7",
  measurementId: "G-87D1N8XWD2"
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
