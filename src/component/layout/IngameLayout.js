import React, { useState } from 'react'
import { useEffect } from 'react'

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

const SettingImage = styled.img`
  position: fixed;
  width: 48px;
  height: 48px;
  bottom: 40px;
  right: 40px;
  transition: transform 0.3s;

  ${({ rotate }) => rotate && 'transform: rotate(45deg);'}
`

const IngameLayout = ({ children }) => {
  const [themeMode, allThemes, themeKey, setMode] = useTheme()
  const theme = allThemes[themeKey.indexOf(themeMode)]
  const [volume, setVolume] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const localSettingFontVolume = localStorage.getItem('fontvolume')
    if (localSettingFontVolume) {
      setVolume(localSettingFontVolume)
    }
    return () => {}
  }, [])

  return (
    <>
      <ThemeProvider theme={theme} fontSize={0}>
        <Main fontSize={parseInt(volume) + 12}>
          <>{children}</>
        </Main>
        {isOpen ? (
          <SettingPopup toggleFunc={togglePopup} setMode={setMode} setVolume={setVolume} volume={volume} />
        ) : null}
      </ThemeProvider>
      <SettingImage
        src={'setting.png'}
        onClick={togglePopup}
        rotate={isOpen} // Add the "rotate" prop based on the "isOpen" state
      />
    </>
  )
}

export default IngameLayout
