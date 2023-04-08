import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAlbumTracks } from '../../@types/IAlbumTracks';
import { ITracks } from '../../@types/ITracks';
import { Track } from '../../components/Track';
import { formatAlbumDuration } from '../../utils/formatAlbumDuration';

export function Album() {
  const { id, name } = useParams();
  const token = JSON.parse(localStorage.getItem('token') || '{}');

  const [albumTracks, setAlbumTracks] = useState<IAlbumTracks | null>(null);
  const [trackList, setTrackList] = useState<ITracks[] | null>(null) ;
  
  const fetchAlbumClicked = async() => {
    const { data } = await api.get(`/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setAlbumTracks(data);
    setTrackList(data.tracks.items);

  };

  const totalAlbumDuration = trackList?.reduce((totalDuration, track) => totalDuration + track.duration_ms, 0);

  const formattedAlbumDuration = formatAlbumDuration(totalAlbumDuration as number);

  useEffect(() => {
    fetchAlbumClicked();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gradient-200 from-0 via-gradient-300 to-gradient-400 w-full flex items-start flex-col max-h-full min-h-screen ">
      <div className='h-80 w-full bg-no-repeat bg-cover bg-center blur-md fixed -z-0  md:w-full' style={{backgroundImage: `url(${albumTracks?.images[0].url})`}}></div>
      <div className='flex gap-4 items-center justify-center z-10 '>
        <img src={albumTracks?.images[1].url} alt="" className='ml-12 mt-16 blur-none' />
        <div className='flex flex-col gap-4 justify-center mt-10'>
          <span className='font-bold text-gray-50 flex gap-2'>
            <span>
             Album
            </span>
            -
            <a className='text-gray-50 hover:underline' href={albumTracks?.external_urls.spotify} target='blank'>
               Open on Spotify
            </a>
           
          </span>
          <h1 className='text-gray-50 text-6xl font-bold w-10/12'>
            {albumTracks?.name}
          </h1>
          <div className='text-gray-50 flex gap-10 '>
            <div className='flex gap-2 '>
              <span className='font-medium'>
                {albumTracks?.artists[0].name}
              </span>
              •
              <span className='text-gray-100'>
                {albumTracks?.release_date}
              </span>
              •
              <span  className='text-gray-100'>
                {albumTracks?.total_tracks} tracks, <span  className='text-gray-100'> {formattedAlbumDuration} </span> 
              </span>
            </div>
       
          </div>
        </div>
      </div>

      <div className='z-10 ml-12 mt-10 w-[60vw] pb-24'>
        {
          trackList?.map(track =>
            <div key={track.id}>
              <Track 
                key={track.id} 
                id={track.id as string}
                name={track.name} 
                track_number={track.track_number} 
                preview_url={track.preview_url as string} 
                duration_ms={track.duration_ms}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}
