import React from 'react'
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'

import styled, { ThemeProvider } from 'styled-components'

import { dark, light, redTheme } from '../../style/theme'
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
  const [themeMode, toggleTheme] = useTheme() // hook 함수 하용
  const theme = themeMode === 'light' ? light : dark
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <IngameNavbar onMenu={toggleDrawer} />
        <>{children}</>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla">
          <ThemeButton themeColor={redTheme} onClick={toggleTheme}>
            테마 변경
          </ThemeButton>
        </Drawer>
      </Main>
    </ThemeProvider>
  )
}

export default IngameLayout
