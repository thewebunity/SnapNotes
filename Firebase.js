import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuPLPnPbqd2LMMN78ACvVTleAkNtEc6Hw",
  authDomain: "easy-notes-e1012.firebaseapp.com",
  projectId: "easy-notes-e1012",
  storageBucket: "easy-notes-e1012.appspot.com",
  messagingSenderId: "793771004607",
  appId: "1:793771004607:web:f0d8418cb3781f571aac0a",
  measurementId: "G-HBPD66T83S"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const rdb = getDatabase(app);

export default db ;