/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import './SearchBar.css'

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [spotifyToken, setSpotifyToken] = useState(null);

  useEffect(() => {
    const spotifyTokenFromUrlFragment = window.location.hash.substr(14);
    setSpotifyToken(spotifyTokenFromUrlFragment);
  }, [])

  async function handleSearch() {
    try {
      await props.searchSpotify(searchTerm, spotifyToken); 
    } catch (error) {
      const clientId = '0744a9d113234aed9830ca9b36b3be57';
      const currentUrl = window.location.href;
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentUrl}`;
    }
  }

  return (
      <div className="SearchBar">
      <input onChange={e => setSearchTerm(e.target.value)} placeholder="Enter A Song Title" />
      <a onClick={handleSearch}>SEARCH</a>
    </div>
  )
}

export default SearchBar;