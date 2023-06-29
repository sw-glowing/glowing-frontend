import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import { COLORS } from '../style/color'

const RootCont = styled.div`
  background-image: url('background/1.png');
  width: 100%;
  height: 100%;
  display: flex;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 50%;
`
const Center = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`
const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`
const Gap8 = styled.div`
  padding: 8px;
`
const Btn = styled.button`
  background-color: ${COLORS.button};
  padding: 24px 0px;
  border-radius: 48px;
  width: 480px;
  font-size: 32px;
  font-weight: bold;
  box-shadow: 5px 5px rgba(87, 73, 132, 0.38);
  border: none;
`
function HomePage() {
  const navigate = useNavigate()
  return (
    <RootCont>
      <Cont>
        <Gap8 />
        <Center>
          <img
            src="/logo.png"
            style={{
              width: '480px',
            }}
          ></img>
          <SubTitle>부족한 문해력을 향상시켜보세요</SubTitle>
          <Gap8 />
        </Center>
        <Center>
          <Btn
            type="button"
            onClick={() => {
              navigate('/learn')
            }}
          >
            학습하기
          </Btn>
          <Gap8></Gap8>
          <Btn type="button">테스트하기</Btn>
        </Center>
      </Cont>
    </RootCont>
  )
}

export default HomePage
