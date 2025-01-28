import { useState } from 'react'
import './App.css'
import Home from './Home'
import {   BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NumberCard from './NumberCard'
import Story from './Story'

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/number-card" element={<NumberCard/>}/>
      <Route path="/story" element={<Story/>}/>
      </Routes>
    </Router>
  )
}

export default App;
