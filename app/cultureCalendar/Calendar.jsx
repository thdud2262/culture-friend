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
  
  const numberDate = new Date(curDate.year, curDate.month + 1, 0).getDate();
  const numbersArray = Array.from(
    { length: numberDate },
    (_, index) => index + 1
  );
  const gridColumnStart = new Date(curDate.year, curDate.month, 1).getDay() + 1;
  const firstGridDateStyle = { gridColumnStart: gridColumnStart };

  const handlePrevMonth = () => {
    setCurDate((state) => {
      const prevMonth = state.month - 1;
      const prevYear = state.year;
      if(prevMonth < 0){
        return {...state, month:11, year:prevYear-1}
      }
      return { ...state, month: prevMonth };
    });
  };

  const handleNextMonth = () => {
    setCurDate((state)=>{
      const nextMonth = state.month + 1
      const nextYear = state.year
      if(nextMonth > 11){
        return {...state, month: 0, year: nextYear+1}
      }
      return { ...state, month: nextMonth }
    })
  };

  const isSunday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 0;
  };

  const isSaturday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 6;
  };

  return (
    <div className={styles.calendarBox}>
      <div className={styles.calendarMonth}>
        <button onClick={handlePrevMonth}> {" < "} </button>
        <p>{curDate.year}년 {curDate.month+1}월</p>
        <button onClick={handleNextMonth}> {" > "} </button>
      </div>
      <div className={styles.days}>
        <p className={styles.day}>SUN</p>
        <p className={styles.day}>MON</p>
        <p className={styles.day}>TUE</p>
        <p className={styles.day}>WED</p>
        <p className={styles.day}>THU</p>
        <p className={styles.day}>FRI</p>
        <p className={styles.day}>SAT</p>
      </div>
      <div className={styles.dates}>
        {numbersArray?.map((ele) => {
          let cellStyle = {};
          if (isSunday(curDate.year, curDate.month, ele)) {
            cellStyle.color = "red";
          }
          
          if (isSaturday(curDate.year, curDate.month, ele)) {
            cellStyle.color = "blue";
          }

          return ele === 1 ? (
            <p
              key={1}
              className={styles.date}
              style={{ ...firstGridDateStyle, ...cellStyle }}
            >
              {1}
            </p>
          ) : (
            <p
              key={ele}
              className={styles.date}
              style={ cellStyle }
            >
              {ele}
            </p>
          );
        })}
      </div>
    </div>
  );
}
