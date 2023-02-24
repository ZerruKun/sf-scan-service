import React from 'react'
import styles from "./SearchingForm.module.css"
import StartDatePick from "../StartDatePick/StartDatePick"
import EndDatePick from "../EndDatePick/EndDatePick"
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'

const SearchingForm = observer(() => {
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
    } = useForm({
        mode: "onBlur"
    });

  const onFormSubmit = (data) => {

  }

  return (
    <form className={styles.general}>
        <div className={styles.leftSide}>
            <label className={styles.label}>
                ИНН компании *
                <input 
                    className={styles.textInput} 
                    placeholder="10 цифр" 
                    type="number" 
                    {...register("inn", {
                        required: true, 
                        minLength: 10,
                        pattern:{
                            valueAsNumber: true,
                            value: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
                        },
                    })}
                />
            </label>
            {/* Test */}
            <span>{errors?.inn && <p>Введите корректные данные</p>}</span>
            <label className={styles.label}>
                Тональность
                <select className={styles.select}>
                    <option>Любая</option>
                    <option>Позитивная</option>
                    <option>Негативная</option>
                </select>
            </label>
            <label className={styles.label}>
                Количество документов в выдаче *
                <input 
                    className={styles.textInput} 
                    placeholder="От 1 до 1000" 
                    type="number"
                    {...register("docs", {
                        required: true, 
                        min: 1,
                        max: 1000, 
                        minLength: 1,
                        maxLength: 4, 
                        valueAsNumber: true,
                    })}
                />
            </label>
            <label className={styles.label}>
                Диапазон поиска *
                <div className={styles.dates}>
                    <StartDatePick />
                    <EndDatePick />
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
                <input className={styles.submitInput} onClick={(e) => {e.preventDefault(); console.log("Поиск"); store.getHistogram();}} value="Поиск" type="submit" disabled={!isValid}/>
                <span>* Обязательные к заполнению поля</span>
            </div>
        </div>
    </form>
  )
})

export default SearchingForm
