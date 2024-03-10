import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIFLz56iR-VFFqGoRQ7eQ9tj75CS0o9iE",
  authDomain: "sientesegura.firebaseapp.com",
  projectId: "sientesegura",
  storageBucket: "sientesegura.appspot.com",
  messagingSenderId: "1043701456326",
  appId: "1:1043701456326:web:751598da4cb98eb63d66c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
const auth = getAuth(app);

export { app, auth };
