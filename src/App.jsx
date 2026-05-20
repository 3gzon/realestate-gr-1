

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Properties from './pages/Properties'

function App() {

  return (
    <>
     <Navbar />    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/properties' element={<Properties />} />
    </Routes>
    </>
  )
}

export default App
