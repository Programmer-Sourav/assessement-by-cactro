import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import TopCards from './components/TopCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to="/">Home</Link>
     <Routes>
      <Route path='/' element={<TopCards/>}/>
      <Route path='/details' element={<TopCards/>}/>
     </Routes>
    </>
  )
}

export default App
