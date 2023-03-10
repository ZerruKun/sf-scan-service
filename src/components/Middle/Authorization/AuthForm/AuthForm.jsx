import React from 'react'
import styles from "./AuthForm.module.css"
import { useForm } from 'react-hook-form'
import store from '../../../../store/store'
import { observer } from 'mobx-react-lite'


const AuthForm = observer(() => {

  // let date = new Date();
  // date.setDate(date.getDate() - 1)
  
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onFormSubmit = (data) => {
    store.setLogin(data.login);
    store.setPassword(data.password);
    store.getToken();
    reset();
  }

  return (
    <form className={styles.general} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.authChoose}>
        {/* Выключены специально, так как регистрации в задании не предполагается */}
        <button className={`${styles.button} ${styles.signIn} ${styles.activeButton}`} disabled>Войти</button>
        <button className={`${styles.button} ${styles.signUp}`} disabled>Зарегистрироваться</button>
      </div>
      <label className={styles.label}>
        {/* Не добавлял маску для телефона, так как не представляю как реализовать проверку в рамках одно поля,
        а добавлять библиотеку и потом по факту не использовать её, не имеет смысла*/}
        Логин или номер телефона:
        <input 
          className={styles.textInput} 
          type="text"
          {...register("login", {
            required: true, 
            minLength: 5, 
          })}
        />
      </label>
      <span className={styles.errorMessage}>{errors?.login && <p>Введите корректные данные</p>}</span>
      <label className={styles.label}>
        Пароль:
        <input 
          className={styles.textInput} 
          type="password" 
          {...register("password", {
          required: true,
          minLength: 5, 
          })}
        />
      </label>
      <span className={styles.errorMessage}>{errors?.password && <p>Неверный пароль</p>}</span>
      <input 
        className={styles.submitInput} 
        value="Войти" type="submit" 
        disabled={!isValid}
      />
    </form>
  )
})

export default AuthForm
