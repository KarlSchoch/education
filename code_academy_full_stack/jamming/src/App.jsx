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
  const [playlistName, setPlaylistName] = useState('Dummy');
  const [searchResults, setSearchResults] = useState(trackDummy);

  function handleAddTrack(newTrack) {
    console.log(`Initial playlist: ${playlistTracklist}`)
    setPlaylistTracklist(prev => {
      if (prev.some(track => track.title === newTrack.title && track.artist === newTrack.artist)) {
        console.log("Track already exists in playlist")
        return prev
      }
      console.log("Adding track to playlist")
      return [...prev, newTrack]
    });
  }

  // console.log("* Calling handleAddTrack with new song *")
  // handleAddTrack({
  //   title: 'Song 2',
  //   artist: 'Artist 2',
  //   album: 'Album 2',
  // })
  // console.log("* Calling handleAddTrack with song already in playlist *")
  // handleAddTrack({
  //   title: 'Song 1',
  //   artist: 'Artist 1',
  //   album: 'Album 1',
  // })

  return (
    <div className="container">
      <div id="search-column">
        <SearchBar />
        <SearchResults results={searchResults} />
      </div>
      <Playlist tracklist={playlistTracklist} name={playlistName}/>
    </div>
  )
}

export default App
