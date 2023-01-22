import React from 'react'
import DatePick from '../DatePick/DatePick'
import styles from "./SearchingForm.module.css"
// import { useForm } from 'react-hook-form'

const SearchingForm = () => {
  return (
    <form className={styles.general}>
        <div className={styles.leftSide}>
            <label className={styles.label}>
                ИНН компании *
                <input className={styles.textInput} placeholder="10 цифр"/>
            </label>
            <label className={styles.label}>
                Тональность
                {/* <input className={styles.textInput}/> */}
                <select className={styles.select}>
                    <option>Любая</option>
                    <option>Позитивная</option>
                    <option>Негативная</option>
                </select>
            </label>
            <label className={styles.label}>
                Количество документов в выдаче *
                <input className={styles.textInput} placeholder="От 1 до 1000"/>
            </label>
            <label className={styles.label}>
                Диапазон поиска *
                <div className={styles.dates}>
                    <DatePick />
                    <DatePick />
                </div>
            </label>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.checksSection}>
                {/* Active exemple */}
                <label className={`${styles.inputLabel} ${styles.activeInputLabel}`}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Признак максимальной полноты
                </label>
                <label className={styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Упоминания в бизнес-контексте
                </label>
                <label className={styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Главная роль в публикации
                </label>
                <label className={styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Публикации только с риск-факторами
                </label>
                <label className={styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Включать технические новости рынков
                </label>
                <label className={styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Включать анонсы и календари
                </label>
                <label className={styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox"/>
                    Включать сводки новостей
                </label>
            </div>
            <div className={styles.buttonSection}>
                <input className={styles.submitInput} value="Поиск" type="submit"/>
                <span>* Обязательные к заполнению поля</span>
            </div>
        </div>
    </form>
  )
}

export default SearchingForm
