import { initializeApp} from 'firebase';
import { getAuth} from 'firebase';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHaKvFidijIVqPzgQPXrRMEww09xYbkQ8",
  authDomain: "projeto-teste-46b4d.firebaseapp.com",
  projectId: "projeto-teste-46b4d",
  storageBucket: "projeto-teste-46b4d.firebasestorage.app",
  messagingSenderId: "188581069507",
  appId: "1:188581069507:web:cc544ff8a7c2cf0d131876"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);