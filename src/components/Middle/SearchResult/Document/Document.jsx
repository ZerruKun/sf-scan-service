import React from 'react'
import styles from "./Document.module.css"
import testImg from "../../../../images/searchResult/test.png"

const Document = () => {
  return (
    <div className={styles.general}>
      <div className={styles.info}>
        <span className={styles.date}>13.09.2021</span>
        <span className={styles.source}>Комсомольская правда KP.RU</span>
      </div>
      <h4 className={styles.header}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h4>
      <span className={styles.kind}>Технические новости</span>
      <div className={styles.imageContainer}>
        <img src={testImg} alt="test" />
      </div>
      <div className={styles.text}>
        <p>
            SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение 
            прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. 
            Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon 
            и других топовых компаниях.
        </p>
        <p>
            Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 
            80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 
            2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к 
            собеседованиям и познакомиться с IT-рекрутерами.
        </p>
      </div>
      <div className={styles.bottomSection}>
        <button>Читать в источнике</button>
        <span>2 543 слова</span>
      </div>
    </div>
  )
}

export default Document
