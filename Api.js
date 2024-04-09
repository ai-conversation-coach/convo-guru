// api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Your API base URL
});

export const fetchData = async () => {
  try {
    const response = await instance.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it at the caller
  }
};

export const postData = async (data) => {
  try {
    const response = await instance.post('/data', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Rethrow the error to handle it at the caller
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
