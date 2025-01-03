import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "dtracker-df0cc.firebaseapp.com",
  projectId: "dtracker-df0cc",
  storageBucket: "dtracker-df0cc.appspot.com",
  messagingSenderId: "58249491372",
  appId: "1:58249491372:web:09a4ef79932629488b8009",
  measurementId: "G-E8N3EK6NL1",
};

const app = initializeApp(firebaseConfig);
export default app;
