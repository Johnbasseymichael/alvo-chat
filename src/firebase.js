import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import{getStorage} from "firebase/storage"
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCBCtPBHeBz3BPT5OtrlOveaeIUodLOdNs",
  authDomain: "alvochat-4e9ee.firebaseapp.com",
  projectId: "alvochat-4e9ee",
  storageBucket: "alvochat-4e9ee.appspot.com",
  messagingSenderId: "278735560078",
  appId: "1:278735560078:web:c120f7b45b89f871ab18df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage()
export const db = getFirestore()
