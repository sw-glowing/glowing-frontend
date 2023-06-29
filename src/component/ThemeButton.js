import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

const JumpingImage = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  animation: ${jumpAnimation} 0.5s;

  &:active {
    animation: none; /* Disable the animation on long press */
  }
`

function ThemeButton({ id, onClick, isChecked = false }) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOnClick = () => {
    setIsAnimating(true)
    onClick()
    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Duration of the animation, adjust as needed
  }

  return (
    <JumpingImage
      src={isChecked ? `themebutton/${parseInt(id)}s.png` : `themebutton/${parseInt(id)}.png`}
      onClick={handleOnClick}
      style={{ transform: isAnimating ? 'translateY(-10px)' : 'translateY(0)' }}
    />
  )
}

export default ThemeButton
