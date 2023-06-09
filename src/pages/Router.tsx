import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Album } from './Album';
import { Home } from './Home';
import { AboutPage } from './About';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id/:name" element={<Album />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
