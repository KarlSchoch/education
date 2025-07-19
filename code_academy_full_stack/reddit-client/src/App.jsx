import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Content from './components/Content';
import MainPage from './components/MainPage';
import PostDetails from './components/PostDetails';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  console.log("showing App component")

  return (
    <>
      <Banner />
      <Routes>
        <Route path='/' element={<Content />}>
          <Route index element={<MainPage />} />
          <Route path='post/:postId' element={<PostDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
