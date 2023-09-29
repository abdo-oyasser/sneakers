import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => { document.querySelectorAll(".img1").forEach((e)=>{
    e.classList.add("active-img") 
  }) }, [])

  return (
    <>
      <div className='container'>
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
