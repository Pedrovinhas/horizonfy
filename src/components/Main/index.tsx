import { useEffect, useState } from 'react';
import { IAlbum } from '../../@types/IAlbum';
import { AlbumGrid } from '../AlbumGrid';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

export function Main() {
  const { getAccessToken } = useAuth();
  const [albumName, setAlbumName] = useState('');
  const [albumList, setAlbumList] = useState<IAlbum[] | null>(null);

  const searchAlbum = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem('token') || '{}');
  
    const { data } = await api.get('/search', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: albumName,
        type: 'album'
      }
    });

    setAlbumList(data.albums.items);
  };

  
  useEffect(() => {
    getAccessToken();
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
            <div key={album.id}>
              <AlbumGrid key={album.id} id={album.id} external_urls={album.external_urls}artist={album.artist} release_date={album.release_date} name={album.name} total_tracks={album.total_tracks} images={album.images} />
            </div>)
        }
      </div>
    </main>
  );
}
 