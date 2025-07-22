import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import MainPage from './components/MainPage/MainPage';
import PostDetails from './components/PostDetails/PostDetails';
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
          <Route path='post/:id' element={<PostDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
