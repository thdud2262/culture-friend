"use client";
import React from "react";
import styles from "./_layoutComp.module.css";

export default function TopScrollBtn() {
  return (
    <button
      className={styles.scrollUpBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      위로
    </button>
  );
}
