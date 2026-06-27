import { useState } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MyJournals from './components/MyJournals'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/myJournals' Component={MyJournals}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}


export default App
