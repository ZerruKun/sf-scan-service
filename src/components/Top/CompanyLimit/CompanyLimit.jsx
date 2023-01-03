import React from 'react'
import styles from "./CompanyLimit.module.css"

const CompanyLimit = () => {
  return (
    <div className={styles.general}>
      <div className={styles.lists}>
        <ul className={styles.nameList}>
            <li className={styles.nameItem}>Использовано компаний</li>
            <li className={styles.nameItem}>Лимит по компаниям</li>
        </ul>
        <ul className={styles.valueList}>
            <li className={styles.valueItem}>34</li>
            <li className={styles.valueItem}>100</li>
        </ul>
      </div>
      <div>
        {/* Loader */}
      </div>
    </div>
  )
}

export default CompanyLimit
