import React, { useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import NotSigned from '../NotSigned/NotSigned'
import Signed from '../Signed/Signed'
import styles from "./Interaction.module.css"
import { observer } from 'mobx-react-lite'
import store from '../../../store/store'

const Interaction = observer(() => {
  
  useEffect(() => {
    store.checkToken();
  }, [])

  return (
    <div className={styles.general}>
      <Navigation />
      {store.token === "" ? (
        <NotSigned />
      ) : (
        <Signed />
      )}
    </div>
  )
})

export default Interaction
