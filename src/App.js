import React from 'react'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Inventory from "./components/Inventory"
import Reports from "./components/Reports"
import Navbar from "./components/Navbar"
import { Footer } from './components/Footer'
import {Routes,Route} from 'react-router-dom';
import "./App.css"
import Advanced from './components/Advanced'
import Analysis from './components/Analysis'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path='/advanced' element={<Advanced/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
      </Routes>
    </>
  )
}

export default App; 