import React, {useState, useEffect} from 'react';
import './App.css';
import Spotify from '../../utils/Spotify'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState(null);

  useEffect(() => {
    const spotifyTokenFromUrlFragment = window.location.hash.split('&')[0].substr(14);
    setSpotifyToken(spotifyTokenFromUrlFragment);
  }, [])

  async function searchSpotify(searchTerms) {
      const results = await Spotify.search(searchTerms, spotifyToken);
      setSearchedTracks(results);
    }

    async function createSpotifyPlaylist(name, trackIds) {
      await Spotify.createPlaylist(name, trackIds, spotifyToken);
      setPlaylistTracks([]);
    }
  
  function addTrackToPlaylist(track) {
    setPlaylistTracks(oldPlaylistTracks => {
      if (oldPlaylistTracks.includes(track)) {
        return oldPlaylistTracks;
      }
      else {
        return [...oldPlaylistTracks, track];
      }
    });
  }

  function removeTrackFromPlaylist(track) {
    setPlaylistTracks(oldPlaylistTracks => oldPlaylistTracks.filter((t => track !== t)));
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mm</span>ing</h1>
      <div className="App">
        <SearchBar searchSpotify={searchSpotify}/>
        <div className="App-playlist">
          <SearchResults tracks={searchedTracks} addTrackToPlaylist={addTrackToPlaylist}/>
          <Playlist tracks={playlistTracks}
          removeTrackFromPlaylist={removeTrackFromPlaylist}
          createSpotifyPlaylist={createSpotifyPlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
