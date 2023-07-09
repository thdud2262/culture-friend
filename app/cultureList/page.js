import React from "react";
import CultureList from "./CultureList";
import styles from "../styles/cultureList.module.css";
import TopScrollBtn from "../components/TopScrollBtn";

export default function cultureList() {
  
  return (
    <div className={styles.container}>
      <CultureList />
      <TopScrollBtn/>
    </div>
  );
}
