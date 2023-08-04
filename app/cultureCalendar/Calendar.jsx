"use client";
import React, { useState, useEffect } from "react";
import styles from "./cultureCalendar.module.css";
import Link from "next/link";
// util함수 import
import { API_SortFunc, serviceKey } from "../util/utils";
import { useMonthNavigation } from "../util/hooks/useMonthNavigator";
import { Modal } from "../util/Modal";
import ExpandedViewText from "./ExpandedText";


export default function Calendar() {
  const todayDate = new Date();
  const [apiData, setApiData] = useState([]);
  const [ isModalOpen, setIsModalOpen] = useState(false)
  const { curDate, handlePrevMonth, handleNextMonth } =
    useMonthNavigation(todayDate);
  
  // API호출
  const urlDate = `${curDate.year}-${String(curDate.month + 1).padStart(
    2,
    "0"
  )}`;
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/50/ / /${urlDate}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.culturalEventInfo) return null;
        const lists = result.culturalEventInfo.row;
        const dataSortList = API_SortFunc(lists);
        setApiData(dataSortList);
      });
  }, [urlDate]);

  // calendar생성
  const numberDate = new Date(curDate.year, curDate.month + 1, 0).getDate();
  // -- 유사배열객체 생성, lnegth길이만큼 배열생성 / 두번째 인수의 반환값으로 구성된 배열반환
  const numbersArray = Array.from({ length: numberDate }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  const gridColumnStart = new Date(curDate.year, curDate.month, 1).getDay() + 1;
  const firstGridDateStyle = { gridColumnStart: gridColumnStart };

  const isSunday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 0;
  };

  const isSaturday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 6;
  };

  // List 모달창 
  const handleAddList = () => {
    
  };
  
  return (
    <div className={styles.calendarBox}>
      <div className={styles.calendarMonth}>
        <button onClick={handlePrevMonth}> {" < "} </button>
        <p>
          {curDate.year}년 {curDate.month + 1}월
        </p>
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

          // 해당 일의 공연 필터링 함수
          const API_calendarDataFilter = apiData.filter((data) => {
            const currentDate = data.STRTDATE.split(" ")[0].split("-")[2];
            return currentDate == ele;
          });

          return ele == "01" ? (
            <div
              key={ele}
              className={styles.dateBox}
              style={{ ...firstGridDateStyle }}
            >
              <p className={styles.date} style={cellStyle}>
                {ele}
              </p>
              <div className={styles.dateCultureList}>
                <ul>
                  {API_calendarDataFilter.map((data, idx) => {
                    if (idx < 5) {
                      return (
                        <>
                          <li key={idx} className={styles.calendarDataList}>
                            <Link href={data.ORG_LINK} target="_blank">
                              {data.TITLE}
                            </Link>
                          </li>
                        </>
                      );
                    }
                  })}
                  {API_calendarDataFilter.length > 4 ? (
                    <button>더보기</button>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div key={ele} className={styles.dateBox}>
              <p className={styles.date} style={cellStyle}>
                {ele}
              </p>
              <div className={styles.dateCultureList}>
                <ul>
                  {API_calendarDataFilter.map((data, idx) => {
                    if (idx < 5) {
                      return (
                        <>
                          <li key={idx} className={styles.calendarDataList}>
                            <Link href={data.ORG_LINK} target="_blank">
                              <ExpandedViewText text={data.TITLE} />
                            </Link>
                          </li>
                        </>
                      );
                    }
                  })}
                  {API_calendarDataFilter.length > 4 ? (
                    <button onClick={()=>{setIsModalOpen(true)}}>더보기</button>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={()=>{setIsModalOpen(false)}} text={'text'}/>
    </div>
  );
}
