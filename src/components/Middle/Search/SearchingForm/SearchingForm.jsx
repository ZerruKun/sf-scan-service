import React from 'react'
import styles from "./SearchingForm.module.css"
import StartDatePick from "../StartDatePick/StartDatePick"
import EndDatePick from "../EndDatePick/EndDatePick"
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'
import { useNavigate } from 'react-router'

const SearchingForm = observer(() => {

  const navigate = useNavigate();

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    // reset,
    } = useForm({
        mode: "onBlur"
    });

  const onFormSubmit = (data) => {
    // console.log("Сабмит формы");
    // console.log("Инн в дате формы: " + data.inn);
    // console.log("Лимит в дате формы: " + data.limit);
    store.setInn(data.inn);
    store.setTonality("any"); // Для теста
    store.setLimit(data.limit);
    // console.log("Поиск, обязательные данные, которые из стора");
    store.getHistogram(); 
    store.getPublishIds(); 
    store.getPublishes();
    navigate("/result");
  }

  return (
    <form className={styles.general} onSubmit={handleSubmit(onFormSubmit)}>
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
                    {...register("limit", {
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
                <label className={store.seachingFormChecks.maxFullness === true ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("maxFullness")}/>
                    Признак максимальной полноты
                </label>
                <label className={store.seachingFormChecks.inBusinessNews === true ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("inBusinessNews")}/>
                    Упоминания в бизнес-контексте
                </label>
                <label className={store.seachingFormChecks.onlyMainRole === true ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("onlyMainRole")}/>
                    Главная роль в публикации
                </label>
                <label className={store.seachingFormChecks.onlyWithRiskFactors === true ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("onlyWithRiskFactors")}/>
                    Публикации только с риск-факторами
                </label>
                <label className={store.seachingFormChecks.isTechNews === false ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("isTechNews")}/>
                    Включать технические новости рынков
                </label>
                <label className={store.seachingFormChecks.isAnnouncement === false ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("isAnnouncement")}/>
                    Включать анонсы и календари
                </label>
                <label className={store.seachingFormChecks.isDigest === false ? `${styles.inputLabel} ${styles.activeInputLabel}` : styles.inputLabel}>
                    <input className={styles.checkbox} type="checkbox" onChange={() => store.setSeachingFormChecks("isDigest")}/>
                    Включать сводки новостей
                </label>
            </div>
            <label className={styles.buttonSection}>
                <input className={styles.submitInput} value="Поиск" type="submit" disabled={!isValid}/>
                <span>* Обязательные к заполнению поля</span>
            </label>
        </div>
    </form>
  )
})

export default SearchingForm
