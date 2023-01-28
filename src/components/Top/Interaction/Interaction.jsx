import React from 'react'
import Navigation from '../Navigation/Navigation'
import NotSigned from '../NotSigned/NotSigned'
// import Signed from '../Signed/Signed'
import styles from "./Interaction.module.css"

const Interaction = () => {
  return (
    <div className={styles.general}>
      <Navigation />
      <NotSigned />
      {/* <Signed /> */}
    </div>
  )
}

export default Interaction
