// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoxztU9XE1Hos4__Gu9PCT4-KHCJ_yChU",
  authDomain: "photo-search-6970a.firebaseapp.com",
  projectId: "photo-search-6970a",
  storageBucket: "photo-search-6970a.appspot.com",
  messagingSenderId: "18651972024",
  appId: "1:18651972024:web:bb7a50c2fa337c3dfa0f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };