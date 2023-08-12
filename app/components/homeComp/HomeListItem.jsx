"use client";
import React, { useEffect, useState } from "react";
import styles from "./s_home.module.css";
import { serviceKey,API_SortFunc, API_FilterFunc } from "@/app/util/utils";

export default function HomeListItem({ codename }) {
  const [cultureList, setCultureList] = useState([]);
  const curDate = new Date().toISOString().split("T")[0];
  
  useEffect(() => {
    fetch(`/api/post/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'codename': codename, 'curDate': curDate, 'serviceKey': serviceKey , 'type':'homeList'}),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.culturalEventInfo == undefined) {
          setCultureList(null);
          return;
        }
        const lists = result.culturalEventInfo.row;
        const listCopy = [...lists];

        const dataSortList = API_SortFunc(listCopy);
        const dataFilterList = API_FilterFunc(dataSortList);

        setCultureList(dataFilterList.slice(0, 6));
      });
  }, []);

  return (
    <ul className={styles.listBox}>
      {cultureList?.map((list, idx) => {
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
