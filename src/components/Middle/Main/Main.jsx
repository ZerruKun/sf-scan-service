import React from 'react'
// import Landing from '../../../pages/Landing/Landing'
import Authorization from "../../../pages/Authorization/Authorization"
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.general}>
      {/* <Landing /> */}
      <Authorization />
    </div>
  )
}

export default Main
