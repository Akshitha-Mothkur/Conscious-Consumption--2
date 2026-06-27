import { useState } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' Component={Home}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}


export default App
