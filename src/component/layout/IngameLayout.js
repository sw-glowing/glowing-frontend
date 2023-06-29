import React, { useState } from 'react'

import styled, { ThemeProvider } from 'styled-components'

import { useTheme } from '../../style/useTheme'
import IngameNavbar from '../IngameNavbar'
import SettingPopup from '../SettingPopup'

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.fontSize}px;
`
const SubmitBtn = styled.div`
  font-size: 1em;
`
const Header = styled.header`
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
`
const IngameLayout = ({ children }) => {
  const [themeMode, allThemes, themeKey, setMode] = useTheme()
  const theme = allThemes[themeKey.indexOf(themeMode)]
  const [volume, setVolume] = useState(1)
  const [isOpen, setIsOpen] = React.useState(false)
  const togglePopup = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <IngameNavbar onMenu={togglePopup} />
      <ThemeProvider theme={theme} fontSize={0}>
        <Main fontSize={parseInt(volume) + 12}>
          <>{children}</>
        </Main>
        {isOpen ? <SettingPopup setMode={setMode} setVolume={setVolume} volume={volume} /> : null}
      </ThemeProvider>
    </>
  )
}

export default IngameLayout
