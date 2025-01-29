import { useState } from 'react'
import './App.css'
import Home from './Home'
import {   BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NumberCard from './NumberCard'
import Story from './Story'
import Login from './Login'

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/number-card" element={<NumberCard/>}/>
      <Route path="/story" element={<Story/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App;
