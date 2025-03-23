import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import TopCards from './components/TopCards'
import TopBar from './components/TopBar'
import MainCard from './components/MainCard'
import RightHero from './components/RightHero'
import Landing from './pages/Landing'
import Modal from './components/Modal'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import Enterprises from './pages/Enterprises'
import GoogleButtonDesign from './components/GoogleButtonDesign'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Toaster/></div>
    {/* <Link to="/">Home</Link> */}
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/main' element={<MainCard/>}/>
      <Route path='/right' element={<RightHero/>}/>
      <Route path='/details' element={<TopCards/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/modal' element={<Modal/>}/>

      <Route path='/login' element={<GoogleButtonDesign/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/resource' element={<Resources/>}/>
      <Route path='/enterprise' element={<Enterprises/>}/>
     </Routes>
    </>
  )
}

export default App
