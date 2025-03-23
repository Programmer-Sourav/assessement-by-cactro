import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import TopCards from './components/TopCards'
import TopBar from './components/TopBar'
import MainCard from './components/MainCard'
import RightHero from './components/RightHero'
import Landing from './pages/Landing'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Link to="/">Home</Link> */}
     <Routes>
      <Route path='/' element={<TopBar/>}/>
      <Route path='/main' element={<MainCard/>}/>
      <Route path='/right' element={<RightHero/>}/>
      <Route path='/details' element={<TopCards/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/modal' element={<Modal/>}/>
     </Routes>
    </>
  )
}

export default App
