import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY, 
  authDomain: "virtual-ui-95cba.firebaseapp.com",
  projectId: "virtual-ui-95cba",
  storageBucket: "virtual-ui-95cba.appspot.com",
  messagingSenderId: "313240824578",
  appId: "1:313240824578:web:6d47c8af82195ad4d4b01b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };