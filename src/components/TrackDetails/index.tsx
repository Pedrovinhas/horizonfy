import { ArrowUpRight, Pause, Play, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { displayPopularityRating } from '../../utils/popularityRating';
import { convertMsToMinutesAndSeconds } from '../../utils/convertMsToMinutes';

interface TrackDetails {
    trackId: string;
    name: string;
    popularity: number;
    track_number: string;
    duration_ms: number;
    external_urls: {
        spotify: string;
    }
    preview_url: string;
}

export function TrackDetails({ trackId, name, preview_url }: TrackDetails) {
  const token = JSON.parse(localStorage.getItem('token') || '{}');
  const [ trackDataDetails, setTrackDataDetails ] = useState<TrackDetails>();

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentUrl, setCurrentUrl] = useState<string>();
  const [currentTrackName, setCurrentTrackName] = useState<string>('');

  const handlePlay = () => {
    if (audioRef.current && preview_url) {
      if (preview_url !== currentUrl) {
   
        if (audioRef.current.paused === false) {
          audioRef.current.pause();
        }
        setCurrentUrl(preview_url);
        setIsPlaying(true);
        console.log(setCurrentTrackName(name));
        audioRef.current.load();
        audioRef.current.play();
      } else if (audioRef.current.paused) {
        setIsPlaying(true);
        audioRef.current.play();
      } else {
        setIsPlaying(false);
        audioRef.current.pause();
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };


  console.log(trackId);

  const fetchTrackClicked = async() => {
    const { data } = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    console.log(data);
    
    setTrackDataDetails(data);
    
  };

  useEffect(() => {
    fetchTrackClicked();
    console.log('oi');
  }, []);

  console.log(trackDataDetails);


  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ArrowUpRight size={24} color="#ffffff" className='pointer'/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-opacity-50 bg-black top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto fixed z-20'/>
        <Dialog.Content className='bg-neutral-800 h-4/6 rounded-lg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-3/5 w-2/5 grid place-items-center fixed z-50'>
          <Dialog.Title className='mt-8 h-16' >
            <span className='text-2xl font-bold text-gray-50'>
              { trackDataDetails?.name }
            </span>
          </Dialog.Title>
          <Dialog.Description className='w-full flex flex-col gap-8 '>
            <div className='w-full h-[1px] bg-neutral-700 flex items-center justify-center'>
              <button onClick={handlePlay} className='w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer'>
                {
                  isPlaying ?
                    <Pause size={24} color="#f1f1f1" weight="bold" /> 
                    : 
                    <Play size={24} color="#f1f1f1" weight="bold" /> 
                }
                <audio ref={audioRef} src={preview_url as string}></audio>
              </button>
            </div>
            <div className='ml-16 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <span className='font-medium text-gray-50'>
                    Número da faixa
                </span>
                <span className='text-neutral-500'>
                  {trackDataDetails?.track_number}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='font-medium text-gray-50'>
                    Duração da música
                </span>
                <span className='text-neutral-500 font-medium'>
                  {trackDataDetails?.duration_ms === undefined ? 'Não há informações sobre a duração da música' : convertMsToMinutesAndSeconds(trackDataDetails.duration_ms) }
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='font-medium text-gray-50'>
                    Popularidade
                </span>
                <span className='text-neutral-500'>
                  {trackDataDetails?.popularity === undefined ? 'Não há informações sobre a popularidade da música' : displayPopularityRating(trackDataDetails.popularity) }
                </span>
              </div>
              <div className='flex flex-col gap-2 '>
                <a href={trackDataDetails?.external_urls.spotify} 
                  target='blank' className='font-medium text-gray-50 underline-offset-2 cursor-pointer transition ease-in-out delay-300 hover:underline  '>
                    Escute a música no Spotify
                </a> 
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Close>
            <X size={24} color="#ffffff" weight="bold" className='top-4 right-4 absolute'/>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}