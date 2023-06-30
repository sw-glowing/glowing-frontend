import React from 'react'

import logo from '../logo.svg'

function HomePage() {
  return (
    <>
      <img width={500} src={logo} alt="logo" />
      <button type="button">학습하기</button>
      <button type="button">테스트 하기</button>
    </>
  )
}

export default HomePage
