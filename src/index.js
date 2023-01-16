import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAooVlbFR43HIvLZagEEESSZi-JQ1odO14",
  authDomain: "siroco-43620.firebaseapp.com",
  projectId: "siroco-43620",
  storageBucket: "siroco-43620.appspot.com",
  messagingSenderId: "125310103178",
  appId: "1:125310103178:web:73ab3c844467f980130773"
};

initializeApp(firebaseConfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
