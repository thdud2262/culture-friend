"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import cultureList from "./../../cultureList/page";

export default function CultureListBox({ codename }) {
  console.log(codename);
  // 75786a6d7274686433395051494a4b
  const [cultureList, setCultureList] = useState([]);
  const curDate = new Date().toISOString().split("T")[0];
  const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;

  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/6/${
    codename ? codename : " "
  }/ /${codename ? " " :curDate}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.culturalEventInfo == undefined) {
          setCultureList(null);
          return;
        }
        setCultureList(result.culturalEventInfo.row);
      });
  }, []);
  console.log(cultureList);

  return (
    <ul className={styles.listBox}>
      {cultureList?.map((list, idx) => {
        return (
          <li key={idx} className={styles.list}>
            <img src={list.MAIN_IMG} />
            <p className={styles.listTitle}>{list.TITLE}</p>
            <p className={styles.listDate}>{list.STRTDATE}</p>
            <p className={styles.listLocation}>{list.PLACE}</p>
          </li>
        );
      })}
    </ul>
  );
}
