import React from 'react'
import Track from './Track'

function Tracklist({ tracks }) {
    console.log("logging inside of tracklist")
    console.log(`tracks ${tracks}`)
    // return <div>test</div>
  return (
    <div>
      <Track track={tracks[0]} />
      <Track track={tracks[1]} />
      <Track track={tracks[2]} />
    </div>
  )
}

export default Tracklist
