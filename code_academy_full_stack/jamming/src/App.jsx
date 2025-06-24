import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'


// App component
function App() {
  const [playlistTracklist, setPlaylistTracklist] = useState([]);
  const [playlistName, setPlaylistName] = useState('Enter Playlist Name');
  const [searchResults, setSearchResults] = useState([]);

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
  async function handleSavePlaylist() {
    // Data Validation: Send alert and return if you meet the following conditions
    // User has not entered a playlist name or playlist tracks
    if (playlistTracklist == [] | playlistName === '' | playlistName === 'Enter Playlist Name' ) {
      alert("Please ensure that songs are added to the playlist and that it has a valid name")
      return
    }
    // TO DO: This is a duplicate playlist

    // Get token from local storage
    const token = localStorage.getItem('spotifyAccessToken');
    // Extract URIs from existing playlist
    let playlistUris = playlistTracklist.map(track => track.uri);
    // Pull user id: https://api.spotify.com/v1/me
    let userID;
    let data;
    let response;
    let errorResponse;
    try {
      // Fetch data
      response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`}
      });
      // Check if response is successful
      if (!response.ok) {
        errorResponse = await response.json()
        throw new Error(`Failed to fetch user info. ${errorResponse.error.status}: ${errorResponse.error.message}`)
      };
      // Parse JSON respone
      data = await response.json()
      userID = data.id;
    } catch (error) {
      console.error('Error occured during data fetching', error);
      return
    }
    // Create new playlist: /v1/users/{user_id}/playlists; Add playlist name in the body of the POST request
    try {
      // Execute fetch
      response = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        method: 'POST',
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playlistName,
          public: false,
        })
      });
      // Check if response is successful
      if (!response.ok) {
        console.log('had issue with the fetch')
        errorResponse = await response.json()
        throw new Error(`Failed to fetch user info. ${errorResponse.error.status}: ${errorResponse.error.message}`)
      };
      data = await response.json()
      console.log(`Playlist create response: ${data}`)

    } catch (error) {
      console.log('Error occured while creating playlist', error)
      return
    }
    // Add new tracks to the playlist: //v1/users/{user_id}/playlists/{playlist_id}/tracks; list of track ids in request body.
    // Reset the playlistTracklist
    setPlaylistTracklist([])
    setPlaylistName('Enter Playlist Name')
  }
  async function handleSongSearch(query) {
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
    const results = await fetch(`https://api.spotify.com/v1/search/?${data.toString()}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`}
    })
      .then(res => res.json())
      .then(res => res.tracks.items.map(el => ({
          'uri': el.uri,
          'name': el.name,
          'album': el.album.name,
          'artist': el.artists[0].name,
        }))
      )

    setSearchResults(results);
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
