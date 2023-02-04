import React from 'react'
import styles from "./AuthForm.module.css"
import { useForm } from 'react-hook-form'
import store from '../../../../store/store'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

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

  const navigate = useNavigate();

  useEffect(() => {
    if(store.token.accessToken !== undefined) {
      // console.log(store.token);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.token])

  // console.log(date);

  return (
    <form className={styles.general} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.authChoose}>
        {/* Выключены специально, так как регистрации в задании не предполагается */}
        <button className={`${styles.button} ${styles.signIn} ${styles.activeButton}`} disabled>Войти</button>
        <button className={`${styles.button} ${styles.signUp}`} disabled>Зарегистрироваться</button>
      </div>
      <label className={styles.label}>
        Логин или номер телефона:
        <input 
          className={styles.textInput} 
          type="text"
          {...register("login", {
          required: true,
          minLength: 5
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
          minLength: 5
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
