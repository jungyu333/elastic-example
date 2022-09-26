import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';
import Movie from './routes/Movie';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
