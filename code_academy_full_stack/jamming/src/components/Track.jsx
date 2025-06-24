import React from 'react'

function Track({ track, searchResult, onAddTrack, onRemoveTrack }) {
    const addTrackButton = <button onClick={ () => onAddTrack(track) }>Add track</button>
    const removeTrackButton = <button onClick={ () => onRemoveTrack(track) }>Remove track</button>
    return (
        <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
            <div><strong>{track.name}</strong></div>
            <div>{track.artist}, {track.album}</div>
            {searchResult ? addTrackButton : removeTrackButton}
        </div>
    )
}

export default Track
