import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Destination from './Components/Destination'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Destination' element={<Destination/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App