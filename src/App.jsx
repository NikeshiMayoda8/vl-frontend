import { useState } from 'react'
import './App.css'
import Home from './Home'
import {   BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NumberCard from './NumberCard'
import Login from './Login'
import Story1 from './Story1'
import Story2 from './Story2'
import Story3 from './Story3'
import Story4 from './Story4'
import Story5 from './Story5'
import Story6 from './Story6'
import Story7 from './Stort7'
import Story8 from './Story8'
import Story9 from './Story9'
import Story10 from './Story10'

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/welcome" element={<Home/>}/>
      <Route path="/number-card" element={<NumberCard/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/story1" element={<Story1/>}/>
      <Route path ="/story2" element={<Story2/>}/>
      <Route path ="/story3" element={<Story3/>}/>
      <Route path ="/story4" element={<Story4/>}/>
      <Route path ="/story5" element={<Story5/>}/>
      <Route path ="/story6" element={<Story6/>}/>
      <Route path ="/story7" element={<Story7/>}/>
      <Route path ="/story8" element={<Story8/>}/>
      <Route path ="/story9" element={<Story9/>}/>
      <Route path ="/story10" element={<Story10/>}/>
      </Routes>
    </Router>
  )
}

export default App;
