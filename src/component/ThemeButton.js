import React from 'react'

import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => props.themeColor.colors.textColor};
  background-color: ${(props) => props.themeColor.colors.bgColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
`

function ThemeButton({ themeColor, url, onClick }) {
  return <img src={url} onClick={onClick} />
}

export default ThemeButton
