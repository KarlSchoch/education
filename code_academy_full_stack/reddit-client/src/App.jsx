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
        {/* This is the body
        Vision: Within here, I want the posts and the subreddits
          - under normal screen width, keep them side by side
          - for smaller screen sizes, I want the subreddit to slip between the banner and the main content
        - Implementation
          - content has an additional 50 padding when screen < 400px
          - subreddit and posts are a grid
            - larger screen: 80/20
            - small screen: 100/0 
        */}
        <div className='subreddits-mobile'>These are the subreddits. Will be a dropdown to save space</div>
        <div className='posts'>
          <div className='post'>
            Main body of the post that includes text, photo
            <br />
            Time and <span className='user'>user</span>
            <hr />
            <div className='comment-toggle'>Comment Toggle (defaults to false to not display comments)</div>
            <div className='comment-list'>
              <div className='comment'>
                Comment's Time and <span className='user'>user</span>
                <br />
                Comment text
              </div>
              <div className='comment'>
                Comment's Time and <span className='user'>user</span>
                <br />
                Comment text
              </div>
            </div>
          </div>
          <div className='post'>
            Main body of the post that includes text, photo
            <br />
            Time and <span className='user'>user</span>
            <hr />
            <div className='comment-toggle'>Comment Toggle (defaults to false to not display comments)</div>
            <div className='comment-list'>
              <div className='comment'>
                Comment's Time and <span className='user'>user</span>
                <br />
                Comment text
              </div>
              <div className='comment'>
                Comment's Time and <span className='user'>user</span>
                <br />
                Comment text
              </div>
            </div>
          </div>
        </div>
        <div className='subreddits'>These are the subreddits</div>
      </div>
      
    </>
  )
}

export default App
