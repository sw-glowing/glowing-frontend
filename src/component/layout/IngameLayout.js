import React, { useState } from 'react'
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
  font-size: ${(props) => props.fontSize}px;
`
const SubmitBtn = styled.div`
  font-size: 1em;
`
const IngameLayout = ({ children }) => {
  const [themeMode, allThemes, setMode] = useTheme()
  const themeKey = ['dark', 'light', 'bubblegum']
  const theme = allThemes[themeKey.indexOf(themeMode)]
  const [volume, setVolume] = useState(1)
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <ThemeProvider theme={theme} fontSize={0}>
      <IngameNavbar onMenu={toggleDrawer} />
      <Main fontSize={parseInt(volume) + 12}>
        <>{children}</>
      </Main>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla">
        {allThemes.map((t, i) => (
          <ThemeButton
            key={i}
            themeColor={t}
            onClick={() => {
              setMode(themeKey[i])
            }}
          />
        ))}
        <input
          type="range"
          min={0}
          max={40}
          color="gray"
          step={2}
          value={volume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber)
          }}
        />
        <div style={{ fontSize: 10, border: '1px solid pink', borderRadius: 5, padding: 5 }}>{volume + 12} px</div>
      </Drawer>
    </ThemeProvider>
  )
}

export default IngameLayout
