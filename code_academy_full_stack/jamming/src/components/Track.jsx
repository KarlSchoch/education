import React from 'react'

function Track({ track, searchResult}) {
    const addTrackButton = <button onClick={()=> alert(`Adding ${track.title} to playlist`)}>Add track</button>
    const removeTrackButton = <button onClick={()=> alert(`Removing ${track.title} from playlist`)}>Remove track</button>
    return (
        <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
        <div><strong>{track.title}</strong></div>
        <div>{track.artist}, {track.album}</div>
        {searchResult ? addTrackButton : removeTrackButton}
        
        </div>
    )
}

export default Track
