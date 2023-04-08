import axios from 'axios';

// const token = localStorage.getItem('token');

// console.log(token);

// export const api = axios.create({
//   baseURL: 'https://api.spotify.com/',
// });

export const apiAccessToken = axios.create({
  baseURL: 'https://api.spotify.com/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(import.meta.env.VITE_SPOTIFY_CLIENT_ID + ':'  + import.meta.env.VITE_SPOTIFY_CLIENT_SECRET)
  },
  data: 'grant_type=client_credentials',
  method: 'POST'
});