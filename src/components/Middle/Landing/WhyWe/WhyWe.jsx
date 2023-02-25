import React, { useState } from 'react'
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
    {id: 4, image : clockImg, text: "4 Высокая и оперативная скорость обработки заявки дубль 2"},
    {id: 5, image : glassImg, text: "5 Огромная комплексная база данных, обеспечивающая объективный ответ на запрос дубль 2"},
    {id: 6, image : shieldImg, text: "6 Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству дубль 2"},
  ]

  const [visibleCards, setVisibleCards] = useState([1,2,3]);

  const nextButton = () => {
    let newVisibleCards = Object.assign([], visibleCards);
    newVisibleCards[0] = newVisibleCards[0] + 1;
    newVisibleCards[1] = newVisibleCards[1] + 1;
    if(newVisibleCards[2] === Cards.length) {
      newVisibleCards[2] = 3;
      newVisibleCards[1] = 2;
      newVisibleCards[0] = 1;
      setVisibleCards(newVisibleCards);
      return;
    }
    newVisibleCards[2] = newVisibleCards[2] + 1;
    setVisibleCards(newVisibleCards);
  }

  const prevButton = () => {
    let newVisibleCards = Object.assign([], visibleCards);
    if(newVisibleCards[0] === 1) {
      newVisibleCards[2] = Cards.length;
      newVisibleCards[1] = Cards.length - 1;
      newVisibleCards[0] = Cards.length - 2;
      setVisibleCards(newVisibleCards);
      return;
    }
    newVisibleCards[0] = newVisibleCards[0] - 1;
    newVisibleCards[1] = newVisibleCards[1] - 1;
    newVisibleCards[2] = newVisibleCards[2] - 1;
    setVisibleCards(newVisibleCards);
  }

  return (
    <div className={styles.general}>
      <h2>Почему именно мы</h2>
      <div className={styles.cardContainer}>
        <button className={styles.previosButton} onClick={prevButton}></button>
        {/* eslint-disable-next-line */}
          {Cards.map((card) => {
            if(card.id === visibleCards[0] || card.id === visibleCards[1] || card.id === visibleCards[2]) {
              return (<WhyWeCard key={card.id} image={card.image} text={card.text}/>);
            }
          })}
        <button className={styles.nextButton} onClick={nextButton}></button>
      </div>   
    </div>
  )
}

export default WhyWe