// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBhpXZGhaid6JKn6ZJDV7fMzC9_84EO11k",
  authDomain: "app1-641f4.firebaseapp.com",
  projectId: "app1-641f4",
  storageBucket: "app1-641f4.appspot.com",
  messagingSenderId: "763754978673",
  appId: "1:763754978673:web:719133e6792d481bbf2ad0",
  measurementId: "G-CWZFPVHSWB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
