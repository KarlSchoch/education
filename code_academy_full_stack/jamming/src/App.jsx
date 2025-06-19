import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

// App component
function App() {
  return (
    <div class="container">
      <div id="search-column">
        <SearchBar />
        <SearchResults />
      </div>
      <Playlist />
    </div>
  )
}

export default App
