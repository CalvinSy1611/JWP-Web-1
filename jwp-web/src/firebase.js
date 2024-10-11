import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA2SuXdtPecU-DEolDZmPCFOox_HlF8r9A",
  authDomain: "jwp-project-1611.firebaseapp.com",
  databaseURL: "https://jwp-project-1611-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jwp-project-1611",
  storageBucket: "jwp-project-1611.appspot.com",
  messagingSenderId: "327958497631",
  appId: "1:327958497631:web:bafbcf2a16002187d5ceea"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getFirestore(app);  

export { auth, db };