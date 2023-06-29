import React from 'react'
// import component 👇
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Routes, Route } from 'react-router-dom'

//import styled, { ThemeProvider } from 'styled-components'
import './App.css'
import LearnPage from './page/LearnPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LearnPage />} />
    </Routes>
  )
}

export default App
