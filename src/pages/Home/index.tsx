import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

export function Home() {
  return (
    <div className='flex flex-col items-center h-full w-full bg-gradient-to-b from-gradient-200 from-0 via-gradient-300 to-gradient-400'>
      <Header/>
      <Main/>
    </div>

  );
}
