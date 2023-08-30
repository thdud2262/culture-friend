"use client";
import React, { useState, useEffect } from "react";
import styles from "./s_home.module.css";
import useHomeDateFetch from "../../util/hooks/useHomeDataFetch";

export default function HomeListItem({ codename }) {
  const curDate = new Date().toISOString().split("T")[0];
  const type = "homeList";
  const fetchDataList = useHomeDateFetch(codename, curDate, type);

  if (!fetchDataList) {
    const divArray = Array.from({ length: 6 }, (_, index) => index);
    return (
      <div className={styles.listBox}>
        {divArray.map((item, index) => (
          <div
            key={index}
            className={styles.list}
            style={{ border: "3px solid red" }}
          >
            -- list Loading --
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className={styles.listBox}>
      {fetchDataList?.map((list, idx) => {
        return (
          <li key={idx} className={styles.list}>
            <a href={list.ORG_LINK} target="_blank">
              <img src={list.MAIN_IMG} />
              <p className={styles.listTitle}>{list.TITLE}</p>
              <p className={styles.listDate}>{list.DATE}</p>
              <p className={styles.listLocation}>{list.PLACE}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
