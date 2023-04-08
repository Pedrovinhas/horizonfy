import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu';

export function DefaultLayout() {
  return (
    <div className='flex h-full '>
      <Menu />
      <Outlet />
    </div>
  );
}
