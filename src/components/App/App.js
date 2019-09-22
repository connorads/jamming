import React, {useState} from 'react';
import './App.css';
import Spotify from '../../utils/Spotify'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'

function App() {
  const [tracks, setTracks] = useState([]);

  async function searchSpotify(searchTerms, spotifyToken) {
      const results = await Spotify.search(searchTerms, spotifyToken);
      setTracks(results);
    }

  return (
    <div>
      <h1>Ja<span className="highlight">mm</span>ing</h1>
      <div className="App">
        <SearchBar searchSpotify={searchSpotify}/>
        <div className="App-playlist">
          <SearchResults results={tracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
