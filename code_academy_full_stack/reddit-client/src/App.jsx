import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='banner'>This is the banner</div>
      <div className='content'>
        This is the body
        Vision: Within here, I want the posts and the subreddits
          - under normal screen width, keep them side by side
          - for smaller screen sizes, I want the subreddit to slip between the banner and the main content
        - Implementation
          - 
      </div>
      
    </>
  )
}

export default App
