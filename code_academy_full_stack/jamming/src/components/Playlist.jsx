import React, { useState } from 'react'
import Tracklist from './Tracklist'
import SpotifyAuth from '../modules/Auth'

function Playlist({ 
    tracklist, 
    name, 
    onRemoveTrack, 
    onPlaylistNameChange,
    onSavePlaylist
}) {

    return (
        <div style={{ background: '#f0f0f0', padding: '1rem', minHeight: '300px' }}>
            <h2 style={{ marginBottom: 0, marginTop: 0 }}>
                <label>
                    Playlist: <input name="playlistName" value={name} type="text" onChange={e => onPlaylistNameChange(e)}></input>
                </label>
            </h2>
            <hr />
            <h2 style={{ marginBottom: 0, marginTop: 0 }}>Spotify Login</h2>
            <SpotifyAuth />
            <hr />
            <h2 style={{ marginBottom: 0, marginTop: 0 }}>Save Playlist</h2>
            <button name="savePlaylist" onClick={onSavePlaylist}>Save Playlist</button>
            <hr />
            <h2 style={{marginBottom: 0, marginTop: 0}}>Tracklist</h2>
            <Tracklist list={tracklist} searchResult={false} onRemoveTrack={onRemoveTrack} />
        </div>
    )
}

export default Playlist
