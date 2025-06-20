import React from 'react'
import Track from './Track'

function Tracklist({ list, searchResult }) {

    if (!list) return null;

    const tracks = list.map(el => 
        <Track 
            key={`${el.title}-${el.artist}`} 
            track={el} 
            searchResult={searchResult} />
    )

    return (
        <div>
            {tracks}
        </div>
    )
}

export default Tracklist
