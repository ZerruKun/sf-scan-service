import React from "react";
import Discription from "../../components/Middle/Authorization/Discription/Discription";
import styles from "./Authorization.module.css";
import KeyImage from "../../components/Middle/Authorization/KeyImage/KeyImage";
import AuthForm from "../../components/Middle/Authorization/AuthForm/AuthForm";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import store from "../../store/store";
import { observer } from "mobx-react-lite";

const Authorization = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    store.checkToken();
    if (store.token !== "") {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.token]);

  return (
    <div className={styles.general}>
      <div className={styles.discriptionNAuth}>
        <Discription />
        <AuthForm />
      </div>
      <KeyImage />
    </div>
  );
});

export default Authorization;