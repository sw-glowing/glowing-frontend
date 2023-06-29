import React from 'react'
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'

import styled, { ThemeProvider } from 'styled-components'

import { dark, light, bubblegum } from '../../style/theme'
import { useTheme } from '../../style/useTheme'
import IngameNavbar from '../IngameNavbar'
import ThemeButton from '../ThemeButton'

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.textColor};
`
const IngameLayout = ({ children }) => {
  const [themeMode, toggle, setMode] = useTheme()
  const themes = [dark, light, bubblegum]
  const themeKey = ['dark', 'light', 'bubblegum']
  const theme = themes[themeKey.indexOf(themeMode)]
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <IngameNavbar onMenu={toggleDrawer} />
        <>{children}</>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla">
          <ThemeButton
            themeColor={light}
            onClick={() => {
              setMode('light')
            }}
          />
          <ThemeButton
            themeColor={dark}
            onClick={() => {
              setMode('dark')
            }}
          />
          <ThemeButton
            themeColor={bubblegum}
            onClick={() => {
              setMode('bubblegum')
            }}
          />
        </Drawer>
      </Main>
    </ThemeProvider>
  )
}

export default IngameLayout
