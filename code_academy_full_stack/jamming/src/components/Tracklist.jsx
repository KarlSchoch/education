import React from 'react'
import Track from './Track'

function Tracklist({ list, searchResult, onAddTrack, onRemoveTrack }) {

    if (!list) return null;

    const tracks = list.map(el => 
        <Track 
            key={`${el.title}-${el.artist}`} 
            track={el} 
            searchResult={searchResult}
            onAddTrack={onAddTrack}
            onRemoveTrack={onRemoveTrack}
        />
    )

    return (
        <div>
            {tracks}
        </div>
    )
}

export default Tracklist
