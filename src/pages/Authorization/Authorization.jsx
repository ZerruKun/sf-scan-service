import React from 'react'
import Discription from '../../components/Middle/Authorization/Discription/Discription'
import styles from "./Authorization.module.css"
import KeyImage from "../../components/Middle/Authorization/KeyImage/KeyImage"
import AuthForm from "../../components/Middle/Authorization/AuthForm/AuthForm"

const Authorization = () => {
  return (
    <div className={styles.general}>
      <Discription />
      <KeyImage />
      <AuthForm />
    </div>
  )
}

export default Authorization
