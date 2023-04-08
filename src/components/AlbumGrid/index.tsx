import { IAlbum } from '../../@types/IAlbum';
import { Link } from 'react-router-dom';

export function AlbumGrid({ name, id, artist, images, release_date, total_tracks }: IAlbum) {
  return (
    <Link 
      to={`album/${id}/${name}`} 
      className='w-52 h-72 p-2 gap-4 bg-gradient-800 rounded-md flex flex-col items-center transition duration-200 ease-in cursor-pointer hover:bg-zinc-800'>
      <img src={images[0].url} alt={`Capa do álbum ${name}`} className='mt-4 w-40 h-40 rounded-md '/>
      <div className='flex flex-col justify-center w-40 gap-1'>
        <span>
          {/* {artist.name} */}
        </span>
        <span className='text-text-gray-200 font-medium'>
          {name.length >= 8 ? `${name.substring(0, 17)}...`: name}
        </span>
        <div className='flex gap-2 text-neutral-500 '>
          <span>
            {release_date.substring(0, 4)}
          </span>
          |
          <span>
            {total_tracks} tracks
          </span>
        </div>
      </div>
    </Link>
  );
}