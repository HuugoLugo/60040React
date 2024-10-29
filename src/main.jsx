import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "{import.meta.env.VITE_FIREAPI}",
  authDomain: "proyecto-react60040.firebaseapp.com",
  projectId: "proyecto-react60040",
  storageBucket: "proyecto-react60040.appspot.com",
  messagingSenderId: "{import.meta.env.VITE_FIREMESSAGING}",
  appId: "{import.meta.env.VITE_FIREAPP}"
};

// Initialize Firebase, puedes quitar la constante
initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
