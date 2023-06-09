import { Buildings, GithubLogo, MagnifyingGlass, SpotifyLogo } from '@phosphor-icons/react';
import HorizonfyLogo from '../../assets/spotify.svg';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav className='bg-fullblack w-20 flex flex-col items-center static  md:w-60'>
      <img className='w-12 h-16 md:w-24 md:h-20 flex mt-4' src={HorizonfyLogo} alt="" />
      <div className='mt-10 flex flex-col gap-4'>
        <Link to='/' className='w-44 items-center justify-start ml-4 flex gap-2  p-2 rounded-md'>
          <MagnifyingGlass size={24} color="#ffffff" weight="regular" />
          <span className='text-gray-50 '>Search</span>
        </Link>
        <a href='https://open.spotify.com/user/22sgapcjmyij2epgjrhvbk76y?si=4d7b750ff3eb4fcb' target='blank' className='w-44 items-center justify-start  ml-4 flex gap-2  p-2 rounded-md'>
          <SpotifyLogo size={24} color="#ffffff" weight="fill" />
          <span className='text-gray-50 '> Meu Spotify</span>
        </a>
        <a href='https://github.com/pedrovinhas' target='blank' className='w-44 items-center justify-start flex ml-4  gap-2  p-2 rounded-md ' aria-details='Link de acesso do github de Pedrovinhas'>
          <GithubLogo size={24} color="#ffffff" />
          <span className='text-gray-50 '>Github</span>
        </a>
        <Link to='/about' className='w-44 items-center justify-start flex ml-4  gap-2  p-2 rounded-md'>
          <Buildings size={24} color="#ffffff" />
          <span className='text-gray-50 '>Sobre</span>
        </Link>
      </div>
    </nav>
  );
}
