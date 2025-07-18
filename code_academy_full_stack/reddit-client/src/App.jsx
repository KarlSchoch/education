import { useState } from 'react';
import Banner from './components/Banner';
import Content from  './components/Content';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Content />
    </>
  )
}

export default App
