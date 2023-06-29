import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import logo from '../logo.svg'

const RootCont = styled.div`
  background-image: url('background/1.png');
  width: 100%;
  height: 100%;
  background-size: cover;
`

function HomePage() {
  const navigate = useNavigate()
  return (
    <RootCont>
      <button
        type="button"
        onClick={() => {
          navigate('/learn')
        }}
      >
        학습하기
      </button>
      <button type="button">테스트 하기</button>
    </RootCont>
  )
}

export default HomePage
