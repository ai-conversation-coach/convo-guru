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
