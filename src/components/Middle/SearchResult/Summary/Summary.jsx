import React from 'react'
import styles from "./Summary.module.css"
import DateResult from "../DateResult/DateResult"

const Summary = () => {
  return (
    <div className={styles.general}>
      <h3>Общая сводка</h3>
      <p>Найдено <span className={styles.resultsCount}>4221</span> вариантов</p>
      <div className={styles.resultsBlock}>
        <button className={`${styles.buttonLeft} ${styles.inactive}`}></button>
        <div className={styles.results}>
          <div className={styles.resultsHeaders}>
            <span>Период</span>
            <span>Всего</span>
            <span>Риски</span>
          </div>
          <DateResult />
          <DateResult />
          <DateResult />
          <DateResult />
          <DateResult />
          <DateResult />
          <DateResult />
          <DateResult />
        </div>
        <button className={`${styles.buttonRight}`}></button>
      </div>
    </div>
  )
}

export default Summary