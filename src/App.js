import React from 'react'

import { Routes, Route } from 'react-router-dom'

import './App.css'
// import HomePage from './page/HomePage'
import LearnPage from './page/LearnPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LearnPage />} />;
    </Routes>
  )
}

export default App
