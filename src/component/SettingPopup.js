import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { GrPowerReset } from 'react-icons/gr'

import styled from 'styled-components'

import { COLORS } from '../style/color'
import { useTheme } from '../style/useTheme'
import ThemeButton from './ThemeButton'

const RootCont = styled.div`
  z-index: 10;
  padding: 28px 48px;
  background-color: ${COLORS.white};
  border-radius: 24px;
  position: fixed;
  bottom: 40px;
  right: 40px;
`
const Title = styled.p`
  font-size: 20px;
`
const Menu = styled.span`
  font-size: 16px;
  color: ${COLORS.coolgray002};
  width: 128px;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`
const ColumnLight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
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

function SettingPopup({ toggleFunc, setVolume, volume, setMode }) {
  const [themeMode, allThemes, themeKey] = useTheme()
  const [checks, setChecks] = useState([false, false, false, false, true, false])
  return (
    <RootCont>
      <ColumnLight>
        <Title>내 멋대로 설정</Title>
        <FaXmark onClick={toggleFunc} />
      </ColumnLight>
      <SubTitle>원하는 테마로 학습하세요</SubTitle>
      <div
        onClick={() => {
          setMode(themeKey[4])
          setChecks([false, false, false, false, true, false])
          setVolume(20)
          localStorage.setItem('fontvolume', volume)
        }}
      >
        <Column>
          <div></div>
          <Box>
            <Label>초기화</Label>
            <GrPowerReset style={{ cursor: 'pointer' }} />
          </Box>
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
            isChecked={checks[i]}
            onClick={() => {
              setMode(themeKey[i])
              var c = [[false] * 6]
              c[i] = true
              setChecks(c)
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
