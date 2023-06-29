import React from 'react'

import styled from 'styled-components'

function ThemeButton({ id, onClick }) {
  return (
    <img
      style={{
        cursor: 'pointer',
      }}
      width={'32px'}
      height={'32px'}
      src={`themebutton/${parseInt(id)}.png`}
      onClick={onClick}
    />
  )
}

export default ThemeButton
