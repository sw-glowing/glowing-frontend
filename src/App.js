import React from 'react'
// import component 👇
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Routes, Route } from 'react-router-dom'

//import styled, { ThemeProvider } from 'styled-components'
import './App.css'
import HomePage from './page/HomePage'
import LearnPage from './page/LearnPage'
import { GlobalStyles } from './style'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
      </Routes>
    </>
  )
}

export default App
