import React from 'react'

import styled from 'styled-components'

function ThemeButton({ id, onClick, isChecked = false }) {
  return (
    <img
      style={{
        cursor: 'pointer',
      }}
      width={'32px'}
      height={'32px'}
      src={isChecked ? `themebutton/${parseInt(id)}s.png` : `themebutton/${parseInt(id)}.png`}
      onClick={onClick}
    />
  )
}

export default ThemeButton
