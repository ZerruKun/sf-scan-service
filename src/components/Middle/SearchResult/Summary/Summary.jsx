import React, { useState } from 'react'
import styles from "./Summary.module.css"
import DateResult from "../DateResult/DateResult"
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'

const Summary = observer(() => {
  // Для тестов
  if(!store.summaryResults.data) {
    console.log("Пустой ответ!");
  } else {
    console.log("Непустой ответ!")
  }
  let dates, all, risks = [];
  dates = store.testSummaryResults.data[0].data.map((el) => el.date.substring(0, 10).split("-").join("."));
  all = store.testSummaryResults.data[0].data.map((el) => el.value);
  risks = store.testSummaryResults.data[1].data.map((el) => el.value);

  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(7);

  return (
    <div className={styles.general}>
      {store.testSummaryResults.data.length === 0 ? (
        <div>Bub!</div>
      ) : (
        <>
        <h3>Общая сводка</h3>
        <p>Найдено <span className={styles.resultsCount}>4221</span> вариантов</p>
        <div className={styles.resultsBlock}>
          <button 
            className={minIndex === 0 ? `${styles.buttonLeft} ${styles.inactive}` : `${styles.buttonLeft}`}
            disabled={minIndex === 0 ? true : false}
            onClick={() => {setMinIndex((index) => index - 1); setMaxIndex((index) => index - 1)}}
          >
          </button>
          <div className={styles.results}>
            <div className={styles.resultsHeaders}>
              <span>Период</span>
              <span>Всего</span>
              <span>Риски</span>
            </div>
            <div className={styles.resultsValues}>
              {store.testSummaryResults.data[0].data.map((el, index) => {
                return (
                  index < minIndex || index > maxIndex ? (
                    <div key={index}></div>
                  ) : (
                    <DateResult 
                    key={index} 
                    date={dates[index]} 
                    all={all[index]} 
                    risks={risks[index]} 
                  />
                  )
                )
              })}
            </div>
          </div>
          <button 
            className={maxIndex === dates.length - 1 ? `${styles.buttonRight} ${styles.inactive}` : `${styles.buttonRight}`}
            disabled={maxIndex === dates.length - 1 ? true : false}
            onClick={() => {setMinIndex((index) => index + 1); setMaxIndex((index) => index + 1)}}
          >
          </button>
        </div>
        </>
      )}
    </div>
  )
})

export default Summary