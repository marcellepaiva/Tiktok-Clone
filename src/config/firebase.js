import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCB_BFjY0qIxQYUqjTllazS6ddJ4HCPHbA",
  authDomain: "tiktok-jornada-b95a3.firebaseapp.com",
  projectId: "tiktok-jornada-b95a3",
  storageBucket: "tiktok-jornada-b95a3.appspot.com",
  messagingSenderId: "457785348965",
  appId: "1:457785348965:web:2eeead0d32699dd72e478c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
