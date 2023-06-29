import React from 'react'
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'

import IngameNavbar from '../IngameNavbar'

const IngameLayout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <IngameNavbar onMenu={toggleDrawer} />
      <>{children}</>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla">
        <div>Hello World</div>
      </Drawer>
    </>
  )
}

export default IngameLayout
