import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='banner'>This is the banner</div>
      <div className='content'>This is the body</div>
      
    </>
  )
}

export default App
