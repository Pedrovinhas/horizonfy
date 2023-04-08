import { useEffect, useState } from 'react';
import axios from 'axios';
import { IAlbum } from '../../@types/IAlbum';
import { AlbumGrid } from '../AlbumGrid';

export function Main() {
  const [albumName, setAlbumName] = useState('');
  const [albumList, setAlbumList] = useState<IAlbum[] | null>(null);

  const searchAlbum = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem('token') || '{}');

    console.log(token);

    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: albumName,
        type: 'album'
      }
    });
    
    console.log(data.albums.items);
    setAlbumList(data.albums.items);
  };

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(import.meta.env.VITE_SPOTIFY_CLIENT_ID + ':'  + import.meta.env.VITE_SPOTIFY_CLIENT_SECRET)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        console.log(tokenResponse.data);

        const accessToken = tokenResponse.data.access_token;

        console.log(tokenResponse.data.access_token);

        localStorage.setItem('token', JSON.stringify(accessToken));
      });
  }, []);


  return (
    <main className="bg-linerBlack w-full flex items-start flex-col max-h-full min-h-screen ">
      <form className="ml-24 mt-12 flex-col flex " onSubmit={searchAlbum}>
        <span className='text-3xl text-text-gray-200'> Busque seu álbum preferido aqui! </span>
        <label htmlFor="" className="text-transparent"> Busque um álbum ou música por aqui </label>
        <input 
          className='bg-transparent p-4 w- rounded-full text-text-gray-200 border-2 border-button placeholder:text-button' 
          placeholder='Comece a escrever...' 
          type="text" 
          onChange={e => setAlbumName(e.target.value)}
          value={albumName}
        />
      </form>
      <div className='flex gap-8 flex-wrap ml-24 mt-2 py-10'>
        
        {
          albumList?.map(album => 
            <>
              <AlbumGrid key={album.id} id={album.id} external_urls={album.external_urls}artist={album.artist} release_date={album.release_date} name={album.name} total_tracks={album.total_tracks} images={album.images} />
            </>)
        }
      </div>
    </main>
  );
}
 