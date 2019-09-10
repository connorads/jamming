import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mm</span>ing</h1>
      <div className="App">
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
