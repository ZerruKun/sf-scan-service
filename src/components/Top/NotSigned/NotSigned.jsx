import React from 'react'
import styles from "./NotSigned.module.css"

const NotSigned = () => {
  return (
    <div className={styles.general}>
      <button className={styles.signUp}>Зарегистрироваться</button>
      <span className={styles.line}></span>
      <button className={styles.signIn}>Войти</button>
    </div>
  )
}

export default NotSigned
