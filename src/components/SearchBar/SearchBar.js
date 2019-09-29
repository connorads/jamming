/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import './SearchBar.css'

function SearchBar(props) {
  const initialSearchTerm = () => String(window.localStorage.getItem('searchTerm') || "")
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    window.localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm])

  async function handleSearch() {
    try {
      await props.searchSpotify(searchTerm); 
    } catch (error) {
      console.warn(error)
      const clientId = '0744a9d113234aed9830ca9b36b3be57';
      const currentUrl = window.location.href;
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentUrl}`;
    }
  }

  async function handleKeyPress(e) {
    if (e.key === "Enter") {
      await handleSearch();
    }
  }

  return (
      <div className="SearchBar">
      <input 
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter A Song Title"
        value={searchTerm} />
      <a onClick={handleSearch}>SEARCH</a>
    </div>
  )
}

export default SearchBar;