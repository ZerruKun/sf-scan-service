import React from 'react'
import styles from "./AuthForm.module.css"
import { useForm } from 'react-hook-form'

const AuthForm = () => {
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm({
    mode: "onBlur"
  });

  const onFormSubmit = (data) => {
    console.log(JSON.stringify(data));
  }

  return (
    <form className={styles.general} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.authChoose}>
        {/* Выключены специально, так как регистрации в задании не предполагается */}
        <button className={`${styles.button} ${styles.signIn} ${styles.activeButton}`} disabled>Войти</button>
        <button className={`${styles.button} ${styles.signUp}`} disabled>Зарегистрироваться</button>
      </div>
      <label className={styles.label}>
        Логин или номер телефона:
        <input className={styles.textInput} {...register("login", {
          required: true,
        })}/>
      </label>
      <span className={styles.errorMessage}>{errors?.login && <p>Введите корректные данные</p>}</span>
      <label className={styles.label}>
        Пароль:
        <input className={styles.textInput} type="password" {...register("password", {
          required: true,
        })}/>
      </label>
      <span className={styles.errorMessage}>{errors?.password && <p>Неверный пароль</p>}</span>
      <input className={styles.submitInput} value="Войти" type="submit" disabled={!isValid}/>
    </form>
  )
}

export default AuthForm
