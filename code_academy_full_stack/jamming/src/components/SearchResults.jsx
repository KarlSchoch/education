import React from 'react'
import Tracklist from './Tracklist'

function SearchResults({ results, onButttonClick }) {
  return (
    <div style={{ margin: '0 auto', background: '#f9f9f9', padding: '1rem', minHeight: '200px' }}>
      <h2>Search Results</h2>
      <Tracklist 
        list={results}
        searchResult={true} 
        />
    </div>
  )
}

export default SearchResults
