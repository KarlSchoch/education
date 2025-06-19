import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Create components feeding into App component
// SearchBar
function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search for a song" />
    </div>
  )
}
function Track() {
  return (
    <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
      <div><strong>Song Title</strong></div>
      <div>Artist Name</div>
      <div>Album Name</div>
    </div>
  )
}
function Tracklist() {
  return (
    <div>
      <Track />
      <Track />
      <Track />
    </div>
  )
}
function SearchResults() {
  return (
    <div style={{ margin: '0 auto', background: '#f9f9f9', padding: '1rem', minHeight: '200px' }}>
      <h2>Search Results</h2>
      <Tracklist />
    </div>
  )
}
function Playlist() {
  return (
    <div style={{ background: '#f0f0f0', padding: '1rem', minHeight: '300px' }}>
      <h2>Playlist</h2>
      <Tracklist />
    </div>
  )
}

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
  // return (
  //   <div style={{ position: 'relative', minHeight: '100vh' }}>
  //     <SearchBar />
  //     <SearchResults />
  //     <Playlist />
  //   </div>
  // )
}

export default App
