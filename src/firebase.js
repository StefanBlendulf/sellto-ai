import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB4YYG9VyxIhFE8WUiIbNRAWUBzvK_qplE",
  authDomain: "sellto-ai.firebaseapp.com",
  databaseURL: "https://sellto-ai-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sellto-ai",
  storageBucket: "sellto-ai.appspot.com",
  messagingSenderId: "266861839023",
  appId: "1:266861839023:web:1c1a1dcfd9a88318514a5a",
  measurementId: "G-GEKH4XKP8G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);