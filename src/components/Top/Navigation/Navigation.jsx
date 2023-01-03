import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={styles.general}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Главная</li>
        <li className={styles.navItem}>Тарифы</li>
        <li className={styles.navItem}>FAQ</li>
      </ul>
    </nav>
  )
}

export default Navigation
