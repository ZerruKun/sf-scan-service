import React from "react";
import styles from "./Landing.module.css";
import CheckGuy from "../../components/Middle/Landing/CheckGuy/CheckGuy";
import SerchService from "../../components/Middle/Landing/SerchService/SerchService";
import Tariffs from "../../components/Middle/Landing/Tariffs/Tariffs";
import WhyWe from "../../components/Middle/Landing/WhyWe/WhyWe";

const Landing = () => {
  return (
    <div className={styles.general}>
      <SerchService />
      <WhyWe />
      <CheckGuy />
      <Tariffs />
    </div>
  );
};

export default Landing;