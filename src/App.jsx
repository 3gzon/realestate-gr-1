

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'

function App() {

  return (
    <>
     <Navbar />    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/:id' element={<PropertyDetails />} />
    </Routes>
    </>
  )
}

export default App
