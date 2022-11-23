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
          <Route path="/giphy-app-react-project" exact element={<Feed />} />
          <Route path="/giphy-app-react-project/categories/:category" exact element={<Feed />} />
          <Route path="/giphy-app-react-project/random" element={<Random />} />
          <Route path="/giphy-app-react-project/upload" element={<Upload />} />
          <Route path="/giphy-app-react-project/gifs/:id" element={<GifDetails />} />
          <Route path="/giphy-app-react-project/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
