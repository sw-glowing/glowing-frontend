import React from 'react'

import styled from 'styled-components'

import { useTheme } from '../style/useTheme'
import ThemeButton from './ThemeButton'

const RootCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

function SettingPopup({ setVolume, volume, setMode }) {
  const [themeMode, allThemes, themeKey] = useTheme()

  return (
    <RootCont>
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
    </RootCont>
  )
}

export default SettingPopup
