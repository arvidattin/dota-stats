import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import SearchPage from './pages/SearchPage';
import ProfileMenuPage from './pages/ProfileMenuPage';
import ProfileStatsPage from './pages/ProfileStatsPage';
import ProfileAboutPage from './pages/ProfileAboutPage';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="profiles/:name">
          <Route index element={<ProfileMenuPage />} />
          <Route path="stats" element={<ProfileStatsPage />} />
          <Route path="about" element={<ProfileAboutPage />} />
        </Route>
      </Route>
    </Routes>
  );
}