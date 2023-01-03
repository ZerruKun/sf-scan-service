import React from 'react'
import styles from "./SerchService.module.css"

const SerchService = () => {
  return (
    <div className={styles.general}>
      <div className={styles.title}>
        <h1>сервис по поиску публикаций<br/>о компании<br/>по его ИНН</h1>
        <p>
            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
        </p>
        <button>Запросить данные</button>
      </div>
      <div className={styles.image}></div>
    </div>
  )
}

export default SerchService
