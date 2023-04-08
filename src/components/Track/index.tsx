import { convertMsToMinutesAndSeconds } from '../../utils/convertMsToMinutes';
import { TrackDetails } from '../TrackDetails';

interface Track {
    id: string;
    name: string;
    track_number: number;
    duration_ms: number;
    preview_url: string;
    isPlaying?: boolean;
    onPlay?: () => void;
    onPause?: () => void;
}

export function Track({ id, name, track_number, duration_ms, preview_url  }: Track) {

  return (
    <>
      <div className='flex px-2 py-6 justify-between items-center h-10 mt-4 rounded-md transition ease-in duration-300 hover:bg-black'>
        <div  className='flex gap-4'>
          <span className='text-zinc-200 font-light'>
            {track_number}
          </span>
          <span className='text-gray-50 font-bold'>
            {name}
          </span>
        </div>
        <div className='flex gap-4'>
          <span className='text-zinc-200 font-light'> {convertMsToMinutesAndSeconds(duration_ms)}</span>
          <TrackDetails name={name}  preview_url={preview_url} trackId={id} />
        </div>
      </div>
  
     
    
    </>
  );

}