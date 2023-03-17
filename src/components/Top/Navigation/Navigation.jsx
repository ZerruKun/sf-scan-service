import React from 'react'
import styles from "./Navigation.module.css"
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className={styles.general}>
      <ul className={styles.navList}>
        {/* Только главная, для остальных нет разделов */}
        <li className={styles.navItem}><Link to="/">Главная</Link></li>
        <li className={styles.navItem}>Тарифы</li>
        <li className={styles.navItem}>FAQ</li>
      </ul>
    </nav>
  )
}

export default Navigation
