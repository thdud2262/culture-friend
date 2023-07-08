"use client";
import React from "react";
import styles from "../styles/commonComp.module.css";

export default function TopScrollBtn() {
  return (
    <button
      className={styles.upBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      위로
    </button>
  );
}
