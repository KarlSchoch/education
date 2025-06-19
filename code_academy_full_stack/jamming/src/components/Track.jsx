import React from 'react'

function Track({track}) {
  return (
    <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
      <div><strong>{track.title}</strong></div>
      <div>{track.artist}</div>
      <div>{track.album}</div>
    </div>
  )
}

export default Track
