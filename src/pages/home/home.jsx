import React from "react";
import Schedule from "../../components/schedule";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <Schedule />
    </div>
  );
};

export default Home;
