"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { FaHeart, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";
import styles from "../styles/cultureList.module.css";

export default function SearchList() {
  const params = useParams();
  const searchText = decodeURIComponent(params.text);
  const [resultList, setResulthList] = useState([]);

  const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/150/ /${searchText}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.culturalEventInfo == undefined) {
          setResulthList(null);
          return;
        }
        const lists = result.culturalEventInfo.row;
        const listCopy = [...lists];
        const sortedList = listCopy.sort((a, b) => {
          const dateA = new Date(a.DATE.split("~")[0]);
          const dateB = new Date(b.DATE.split("~")[0]);
          return dateA - dateB;
        });
        setResulthList(sortedList);
      });
  }, []);

  if (resultList == null) {
    return <div> 공연 정보가 없습니다 </div>;
  }

  return (
    <div className={styles.listBox}>
      {resultList.map((li) => {
        const uniqueId = uuidv4();
        const today = new Date().toISOString().split("T")[0];
        const li_date = li.END_DATE.split(" ")[0];

        return (
          <div key={uniqueId} className={styles.list}>
            {/* <img src={li.MAIN_IMG} /> */}
            <img src="/image/ex1.jpg" />
            <button className={styles.likeIcon}>
              {/* <FaHeart /> */}
              <FaRegHeart />
            </button>
            <div
              onClick={() => {
                window.open(li.ORG_LINK, "_blank");
              }}
            >
              <p className={styles.codeName}>{li.CODENAME}</p>
              <p className={styles.date}>{li.DATE}</p>
              <p className={styles.title}>{li.TITLE}</p>
              <p className={styles.place}>
                <span>공연 장소:</span> {li.PLACE}
              </p>
              <p style={{ color: "red" }}>
                {today > li_date ? "공연 종료" : ""}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
