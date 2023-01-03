import React from 'react'
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={styles.general}>
      <div className={styles.info}>
        <span className={styles.name}>Алексей А.</span>
        <button className={styles.logout}>Выйти</button>
      </div>
      <div className={styles.avatar}></div>
    </div>
  )
}

export default Profile