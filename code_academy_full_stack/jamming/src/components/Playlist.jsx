import React from 'react'
import Tracklist from './Tracklist'

function Playlist({ tracklist, name }) {
    return (
        <div style={{ background: '#f0f0f0', padding: '1rem', minHeight: '300px' }}>
            <h2>{name} Playlist</h2>
            <Tracklist list={tracklist} />
        </div>
    )
}

export default Playlist
