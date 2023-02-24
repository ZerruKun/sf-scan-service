import React from 'react'
import styles from "./WhyWe.module.css"
import WhyWeCard from '../WhyWeCard/WhyWeCard'

const WhyWe = () => {

  const clockImg = require("../../../../images/landing/clock.jpg");
  const glassImg = require("../../../../images/landing/glass.jpg");
  const shieldImg = require("../../../../images/landing/shield.jpg");

  const Cards = [
    {id: 1, image : clockImg, text: "Высокая и оперативная скорость обработки заявки"},
    {id: 2, image : glassImg, text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
    {id: 3, image : shieldImg, text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
    {id: 4, image : clockImg, text: "Высокая и оперативная скорость обработки заявки"},
    {id: 5, image : glassImg, text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
    {id: 6, image : shieldImg, text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
  ]

  return (
    <div className={styles.general}>
      <h2>Почему именно мы</h2>
      <div className={styles.cardContainer}>
        <button className={styles.previosButton}></button>
        {/* <WhyWeCard image={clockImg} text="Высокая и оперативная скорость обработки заявки"/> */}
        <button className={styles.nextButton}></button>
      </div>   
    </div>
  )
}

export default WhyWe
