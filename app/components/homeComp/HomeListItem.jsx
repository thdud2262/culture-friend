'use client'
import React, { useState, useEffect } from 'react';
import styles from "./s_home.module.css";
import { serviceKey } from "@/app/util/utils";
import { Skeleton } from "@mui/material";


export default function HomeListItem({ codename }) {
  const [ fetchDataList, setFetchDataList ] = useState([])
  const curDate = new Date().toISOString().split("T")[0];

  useEffect (()=>{
    const response = fetch(`/api/data/home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codename: codename,
        curDate: curDate,
        serviceKey: serviceKey,
        type: "homeList",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setFetchDataList(result)
      });
  },[])

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
