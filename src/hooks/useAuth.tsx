import axios from 'axios';

export function useAuth() {
  const getAccessToken = async() => {
    await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(import.meta.env.VITE_SPOTIFY_CLIENT_ID + ':'  + import.meta.env.VITE_SPOTIFY_CLIENT_SECRET)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        const accessToken = tokenResponse.data.access_token;

        localStorage.setItem('token', JSON.stringify(accessToken));
      });
  };

  return { getAccessToken};
}
