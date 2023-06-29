import React from 'react'
import { GrPowerReset } from 'react-icons/gr'

import styled from 'styled-components'

import { COLORS } from '../style/color'
import { useTheme } from '../style/useTheme'
import ThemeButton from './ThemeButton'

const RootCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 32px;
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
  width: 128px;
`
const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`
const Themes = styled.div``
const SubTitle = styled.p`
  font-size: 0.8em;
  color: ${COLORS.coolgray002};
`
const Line = styled.div`
  width: 100%;
  border: 1px solid ${COLORS.coolgray002};
`
const Gap8 = styled.div`
  padding-bottom: 8px;
`
const Label = styled.span`
  font-size: 0.9em;
  padding: 8px;
  line-height: 1em;
`
const Input = styled.input`
  background: url('/niddle.svg') no-repeat left;
  appearance: none;
  width: 250px;
`

function SettingPopup({ setVolume, volume, setMode }) {
  const [themeMode, allThemes, themeKey] = useTheme()

  return (
    <RootCont>
      <Title>내멋대로 설정</Title>
      <SubTitle>원하는 테마로 학습하세요</SubTitle>
      <div
        onClick={() => {
          setMode(themeKey[4])
          setVolume(20)
          localStorage.setItem('fontvolume', volume)
        }}
      >
        <Column>
          <div></div>
          <div>
            <Label>초기화</Label>
            <GrPowerReset />
          </div>
        </Column>
      </div>
      <Gap8 />
      <Line />
      <Gap8 />

      <Column>
        <Menu>테마</Menu>
        {allThemes.map((t, i) => (
          <ThemeButton
            key={i}
            id={i + 1}
            onClick={() => {
              setMode(themeKey[i])
            }}
          />
        ))}
      </Column>
      <Column>
        <Menu>글자크기</Menu>
        <Input
          type="range"
          min={0}
          max={40}
          color="gray"
          step={2}
          value={volume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber)
            localStorage.setItem('fontvolume', volume)
          }}
        />
      </Column>
    </RootCont>
  )
}

export default SettingPopup
