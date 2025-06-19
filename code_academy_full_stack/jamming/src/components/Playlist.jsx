import React from 'react'
import Tracklist from './Tracklist'

function Playlist({ tracklist, name }) {
    console.log("logging inside of playlist")
    console.log(`tracklist ${tracklist}`);
    console.log(`track 0 ${tracklist[0]}`);
    console.log(`track 0 title ${tracklist[0].title}`);
    console.log(`name ${name}`);
    return (
        <div style={{ background: '#f0f0f0', padding: '1rem', minHeight: '300px' }}>
        <h2>Playlist</h2>
        <Tracklist tracks={tracklist} />
        </div>
    )
}

export default Playlist
