import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'


const trackDummy = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1',
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    album: 'Album 2',
  },
  {
    title: 'Song 3',
    artist: 'Artist 3',
    album: 'Album 3',
  },
  {
    title: 'Song 4',
    artist: 'Artist 4',
    album: 'Album 4',
  },
  {
    title: 'Song 5',
    artist: 'Artist 5',
    album: 'Album 5',
  },
]

// App component
function App() {
  const [playlistTracklist, setPlaylistTracklist] = useState([{
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1',
  }]);
  const [playlistName, setPlaylistName] = useState('Enter Playlist Name');
  const [searchResults, setSearchResults] = useState(trackDummy);

  function handleAddTrack(newTrack) {
    setPlaylistTracklist(prev => {
      if (prev.some(track => track.title === newTrack.title && track.artist === newTrack.artist)) {
        return prev
      }
      return [...prev, newTrack]
    });
  }

  function handleRemoveTrack(removalTrack) {
    setPlaylistTracklist(prev => {
      return prev.filter((el) => el.title !== removalTrack.title && el.artist !== removalTrack.artist);
    })
  }

  function handlePlaylistNameChange(e) {
    setPlaylistName(e.target.value);
  }

  return (
    <div className="container">
      <div id="search-column">
        <SearchBar />
        <SearchResults 
          results={searchResults} 
          onAddTrack={handleAddTrack}
        />
      </div>
      <Playlist 
        tracklist={playlistTracklist} 
        name={playlistName}
        onPlaylistNameChange={handlePlaylistNameChange}
        onRemoveTrack={handleRemoveTrack}
      />
    </div>
  )
}

export default App
