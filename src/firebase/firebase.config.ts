import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "dtracker-website.firebaseapp.com",
  projectId: "dtracker-website",
  storageBucket: "dtracker-website.firebasestorage.app",
  messagingSenderId: "301122604182",
  appId: "1:301122604182:web:ce15bf796df1bb9cc346b7",
  measurementId: "G-HQ2D9Y5DPW",
};

const app = initializeApp(firebaseConfig);
export default app;
