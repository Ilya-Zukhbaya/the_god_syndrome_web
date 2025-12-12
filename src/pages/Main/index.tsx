import React from "react";
import styles from "./index.module.scss";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Привет</h1>
      <h2>Мы делаем музыку</h2>
    </div>
  );
};
