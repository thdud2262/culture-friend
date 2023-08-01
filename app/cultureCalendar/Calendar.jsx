"use client";
import React, { useState, useEffect } from "react";
import styles from "./cultureCalendar.module.css";

export default function Calendar() {
  const date = new Date();
  const [curDate, setCurDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  });

  const calendarList=[]
  const numberDate = new Date(curDate.year, curDate.month + 1, 0).getDate();
  const numbersArray = Array.from(
    { length: numberDate },
    (_, index) => index + 1
  );
  const gridColumnStart =
    new Date(curDate.year, curDate.month, 1).getDay() + 1;
  const firstGridDateStyle = { gridColumnStart: gridColumnStart };

  return (
    <div className={styles.calendarBox}>
      <div className={styles.calendarMonth}>
        <button> {" < "} </button>
        <p>2023년 8월 1일</p>
        <button style={{ color: "red" }}> {" > "} </button>
      </div>
      <div className={styles.days}>
        <p className={styles.day}>일요일</p>
        <p className={styles.day}>월요일</p>
        <p className={styles.day}>화요일</p>
        <p className={styles.day}>수요일</p>
        <p className={styles.day}>목요일</p>
        <p className={styles.day}>금요일</p>
        <p className={styles.day}>토요일</p>
      </div>
      {/* <button onClick={handleClick}>클릭</button> */}
      <div className={styles.dates}>
        {numbersArray?.map((ele, idx) => {
          return ele === 1
            ? <p
                  key={1}
                  className={styles.date}
                  style={{ ...firstGridDateStyle }}
                  // onClick={() => handleSelectDate(1)}
                >
                  {1}
                </p>
              

            : 
                <p
                  key={ele}
                  className={styles.date}
                  // style={cellStyle}
                  // onClick={() => handleSelectDate(i)}
                >
                  {ele}
                </p>
              
        })}
      </div>
    </div>
  );
}
