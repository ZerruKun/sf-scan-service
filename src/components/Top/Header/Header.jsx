import React from 'react'
import Interaction from '../Interaction/Interaction'
import Logo from '../Logo/Logo'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.general}>
      <Logo />
      <Interaction />
    </header>
  )
}

export default Header
