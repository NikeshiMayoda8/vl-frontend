import { useState } from 'react'
import './App.css'
import Home from './Home'
import {   BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NumberCard from './NumberCard'
import Story from './Story'
import Login from './Login'
import Story1 from './Story1'
import Story2 from './Story2'
import Story3 from './Story3'
import Story4 from './Story4'
import Story5 from './Story5'

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/welcome" element={<Home/>}/>
      <Route path="/number-card" element={<NumberCard/>}/>
      <Route path="/story" element={<Story/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/story1" element={<Story1/>}/>
      <Route path ="/story2" element={<Story2/>}/>
      <Route path ="/story3" element={<Story3/>}/>
      <Route path ="/story4" element={<Story4/>}/>
      <Route path ="/story5" element={<Story5/>}/>
      </Routes>
    </Router>
  )
}

export default App;
