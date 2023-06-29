import React from 'react'

import styled from 'styled-components'

import { COLORS } from '../style/color'
import { useTheme } from '../style/useTheme'
import ThemeButton from './ThemeButton'

const RootCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  background-color: ${COLORS.white};
  border-radius: 24px;
`
const Title = styled.p`
  font-size: 1em;
  line-height: 1em;
`
const Menu = styled.span`
  font-size: 0.9em;
  color: ${COLORS.coolgray002};
`
const Column = styled.div`
  display: flex;
  justify-content: space-between;
`
const SubTitle = styled.p`
  font-size: 0.8em;
  color: ${COLORS.coolgray002};
`
const Line = styled.div`
  width: 100%;
  border: 1px solid ${COLORS.coolgray002};
`
const Input = styled.input``

function SettingPopup({ setVolume, volume, setMode }) {
  const [themeMode, allThemes, themeKey] = useTheme()

  return (
    <RootCont>
      <Title>내멋대로 설정</Title>
      <SubTitle>원하는 테마로 학습하세요</SubTitle>
      <Line />
      <Column>
        <Menu>테마</Menu>
        {allThemes.map((t, i) => (
          <ThemeButton
            key={i}
            themeColor={t}
            onClick={() => {
              setMode(themeKey[i])
            }}
          />
        ))}
      </Column>
      <Input
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
