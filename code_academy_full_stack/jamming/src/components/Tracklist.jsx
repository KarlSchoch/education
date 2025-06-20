import React from 'react'
import Track from './Track'

function Tracklist({ list }) {

    if (!list) return null;

    const tracks = list.map(el => 
        <Track key={`${el.title}-${el.artist}`} track={el} />
    )

    return (
        <div>
            {tracks}
        </div>
    )
}

export default Tracklist
