import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import styles from "./CompanyLimit.module.css"
import store from '../../../store/store';

const CompanyLimit = observer(() => {
  
  useEffect (() => {
    store.getCompaniesInfo();
  }, [])

  return (
    <div className={styles.general}>
      <div className={styles.lists}>
        {/* <ul className={styles.nameList}>
            <li className={styles.nameItem}>Использовано компаний</li>
            <li className={styles.nameItem}>Лимит по компаниям</li>
        </ul>
        <ul className={styles.valueList}>
            <li className={styles.valueItem}>{store.companiesInfo.used}</li>
            <li className={styles.valueItem}>{store.companiesInfo.limit}</li>
        </ul> */}
        <ul className={styles.usedList}>
          <li className={styles.usedItem}>Использовано компаний</li>
          <li className={styles.usedItem}>{store.companiesInfo.used}</li>
        </ul>
        <ul className={styles.limitList}>
          <li className={styles.limitItem}>Лимит по компаниям</li>
          <li className={styles.limitItem}>{store.companiesInfo.limit}</li>
        </ul>
      </div>
      <div>
        {/* Loader */}
      </div>
    </div>
  )
})

export default CompanyLimit
