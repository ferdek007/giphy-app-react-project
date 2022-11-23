import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import Random from './components/Random';
import Upload from './components/Upload';
import GifDetails from './components/GifDetails';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/categories/:category" exact element={<Feed />} />
          <Route path="/random" element={<Random />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/gifs/:id" element={<GifDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
