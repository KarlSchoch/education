import React from 'react'
import Tracklist from './Tracklist'

function Playlist() {
  return (
    <div style={{ background: '#f0f0f0', padding: '1rem', minHeight: '300px' }}>
      <h2>Playlist</h2>
      <Tracklist />
    </div>
  )
}

export default Playlist
