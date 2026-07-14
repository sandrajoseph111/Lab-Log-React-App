import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Add from './components/Add'
import View from './components/View'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Add/>}/>
    <Route path='/vi' element={<View/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
