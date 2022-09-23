import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Search from './routes/Search';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
