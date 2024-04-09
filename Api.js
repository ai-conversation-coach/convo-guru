// api.js
import axios from 'axios';

const BASE_URL = 'https://api.example.com';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}/messages`, { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const getMessages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/messages`);
    return response.data;
  } catch (error) {
    console.error('Error getting messages:', error);
    throw error;
  }
};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZmad2HSLajGi7HxBRCywJvlZGoDE8Gn8",
  authDomain: "mobileui-f135d.firebaseapp.com",
  projectId: "mobileui-f135d",
  storageBucket: "mobileui-f135d.appspot.com",
  messagingSenderId: "336410808732",
  appId: "1:336410808732:web:8740266f1ecefc33a67859",
  measurementId: "G-WWGSPEHNHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
