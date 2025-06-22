import React from 'react'
import Tracklist from './Tracklist'

function Playlist({ tracklist, name, onRemoveTrack, onPlaylistNameChange }) {
    return (
        <div style={{ background: '#f0f0f0', padding: '1rem', minHeight: '300px' }}>
            <h2>
                <label>
                    Playlist: <input name="playlistName" value={name} type="text" onChange={e => onPlaylistNameChange(e)}></input>
                </label>
            </h2>
            <Tracklist list={tracklist} searchResult={false} onRemoveTrack={onRemoveTrack} />
        </div>
    )
}

export default Playlist
