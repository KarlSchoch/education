import React, { useState } from 'react'

function SearchBar({ onSearch }) {

  const [searchQuery, setSearchQuery] = useState('');
  function handleSearchQueryChange(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <label htmlFor="searchBox">Search for a Song: </label>
      <input name="searchBox" id="searchBox" type="text" value={searchQuery} onChange={handleSearchQueryChange} />
      <button name="songSearch" id="songSearch" onClick={() => onSearch(searchQuery)}>Search for the song</button>
    </div>
  )
}

export default SearchBar
