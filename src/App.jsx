import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './components/pages/HomePage/HomePage';
import MovieItem from './components/pages/MovieItem/MovieItem';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/movies');
  }, [pathname]);

  return (
    <Routes>
      <Route path='/movies' element={<HomePage />} />
      <Route path='/movies/:id' element={<MovieItem />} />
    </Routes>
  );
}

export default App;
