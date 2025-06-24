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
    uri: 'spotify:track:6SIV02mskzzc3KXK7t4NHj'
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    album: 'Album 2',
    uri: 'spotify:track:2dRPQFwPqAmc42mDRnsDQu'
  },
  {
    title: 'Song 3',
    artist: 'Artist 3',
    album: 'Album 3',
    uri: 'spotify:track:53LwBS4bovyljsMlLqGfd6'
  },
  {
    title: 'Song 4',
    artist: 'Artist 4',
    album: 'Album 4',
    uri: 'spotify:track:0vvG0VEN6l2fbIEUtq3mQD'
  },
  {
    title: 'Song 5',
    artist: 'Artist 5',
    album: 'Album 5',
    uri: 'spotify:track:3PRTKWFigJCi47YAEsBpiP'
  },
]

// App component
function App() {
  const [playlistTracklist, setPlaylistTracklist] = useState([{
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1',
    uri: 'spotify:track:6SIV02mskzzc3KXK7t4NHj'
  }]);
  const [playlistName, setPlaylistName] = useState('Enter Playlist Name');
  const [searchResults, setSearchResults] = useState(trackDummy);

  // Event handler functions
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
  function handleSavePlaylist() {
    // Extract URIs from existing playlist
    let playlistUris = playlistTracklist.map(track => track.uri);
    // Reset the playlistTracklist
    setPlaylistTracklist([])
    setPlaylistName('Enter Playlist Name')
  }
  async function handleSongSearch(query) {
    console.log(`Searching for the following song: ${query}`);
    // Pull in token from local storage
    const token = localStorage.getItem('spotifyAccessToken');
    // Define query parameters
    const data = new URLSearchParams({
      q: query,
      type: 'track',
      market: 'US',
      limit: 10,
    })
    // Execute search
    const result = await fetch(`https://api.spotify.com/v1/search/?${data.toString()}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`}
    })
    console.log(result.json())
  }


  return (
    <div className="container">
      <div id="search-column">
        <SearchBar onSearch={handleSongSearch} />
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
        onSavePlaylist={handleSavePlaylist}
      />
    </div>
  )
}

export default App
