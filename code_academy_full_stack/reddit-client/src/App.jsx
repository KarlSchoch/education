import { useState } from 'react';
import Banner from './components/Banner/Banner';
import AppRoutes from './app/AppRoutes';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  console.log("showing App component")

  return (
    <>
      <Banner />  
      <AppRoutes />
    </>
  )
}

export default App
