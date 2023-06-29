import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RiMenuFill } from 'react-icons/ri'

import styled from 'styled-components'

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
`
function IngameNavbar({ onMenu }) {
  return (
    <Cont>
      <IoIosArrowBack />
      <span>1/10</span>
      <RiMenuFill onClick={onMenu} />
    </Cont>
  )
}

export default IngameNavbar
