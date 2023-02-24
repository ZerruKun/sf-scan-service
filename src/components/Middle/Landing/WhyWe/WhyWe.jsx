import React, { useEffect, useState } from 'react'
import styles from "./WhyWe.module.css"
import WhyWeCard from '../WhyWeCard/WhyWeCard'

const WhyWe = () => {

  const clockImg = require("../../../../images/landing/clock.jpg");
  const glassImg = require("../../../../images/landing/glass.jpg");
  const shieldImg = require("../../../../images/landing/shield.jpg");

  const Cards = [
    {id: 1, image : clockImg, text: "1 Высокая и оперативная скорость обработки заявки"},
    {id: 2, image : glassImg, text: "2 Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
    {id: 3, image : shieldImg, text: "3 Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
    {id: 4, image : clockImg, text: "4 Высокая и оперативная скорость обработки заявки"},
    {id: 5, image : glassImg, text: "5 Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
    {id: 6, image : shieldImg, text: "6 Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
  ]

  const visibleCards = [1,2,3];

  useEffect(() => {

  }, []);

  return (
    <div className={styles.general}>
      <h2>Почему именно мы</h2>
      <div className={styles.cardContainer}>
        <button className={styles.previosButton}></button>
        {Cards.map((card) => {
          if(card.id === visibleCards[0] || card.id === visibleCards[1] || card.id === visibleCards[2]) {
            return (<WhyWeCard id={card.id} image={card.image} text={card.text}/>);
          }
        })}
        {/* <WhyWeCard image={clockImg} text="Высокая и оперативная скорость обработки заявки"/> */}
        <button className={styles.nextButton}></button>
      </div>   
    </div>
  )
}

export default WhyWe
