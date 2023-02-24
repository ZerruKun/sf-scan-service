import React from 'react'
import Document from '../Document/Document'
import styles from "./Documents.module.css"

const Documents = () => {
  return (
    <div className={styles.general}>
      <h3>Список документов</h3>
      <div className={styles.documents}>
        <Document />
        <Document />
        <Document />
      </div>
      <button className={styles.more}>Показать больше</button>
    </div>
  )
}

export default Documents
