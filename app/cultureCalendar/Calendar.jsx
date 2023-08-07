"use client";
import React, { useState, useEffect } from "react";
import styles from "./cultureCalendar.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

// util함수 import
import { API_SortFunc, serviceKey } from "../util/utils";
import { useMonthNavigation } from "../util/hooks/useMonthNavigator";
import { Modal } from "./Modal";
import ExpandedViewText from "./ExpandedText";

export default function Calendar() {
  const todayDate = new Date();
  const [apiData, setApiData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moreData, setMoreData] = useState(null);
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

  // numberDate 길이의 배열생성
  const numbersArray = Array.from({ length: numberDate }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );

  //
  const filterDataList = numbersArray.map((ele, idx) => {
    // 해당 일의 공연 필터링 함수
    const API_calendarDataFilter = apiData.filter((data, idx) => {
      const currentDate = data.STRTDATE.split(" ")[0].split("-")[2];
      return currentDate == ele;
    });
    // 중복되지 않는 key를 생성해놓은 배열
    const uniqueIds = Array.from(
      { length: API_calendarDataFilter.length },
      () => uuidv4()
    );
    let cellStyle = {};

    return {
      date: ele,
      cellStyle,
      API_calendarDataFilter,
      uniqueIds,
    };
  });

  const gridColumnStart = new Date(curDate.year, curDate.month, 1).getDay() + 1;
  const firstGridDateStyle = { gridColumnStart: gridColumnStart };

  const isSunday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 0;
  };

  const isSaturday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 6;
  };

  // 더보기 버튼 -> 모달 생성
  const handleClickMoreData = (moreData) => {
    setMoreData(moreData);
    setIsModalOpen(true);
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
        {filterDataList?.map((ele, dateIdx) => {
          if (isSunday(curDate.year, curDate.month, ele)) {
            cellStyle.color = "red";
          }
          if (isSaturday(curDate.year, curDate.month, ele)) {
            cellStyle.color = "blue";
          }

          return ele.date == '01' ? (
            <div
              key={dateIdx + 1}
              className={styles.dateBox}
              style={{ ...firstGridDateStyle }}
            > 
              <p className={styles.date} style={ele.cellStyle}>
                {ele.date}
              </p>
              <div className={styles.dateCultureList}>
                <ul>
                  {ele.API_calendarDataFilter.map((data, idx) => {
                    if (idx < 5) {
                      return (
                        <React.Fragment key={ele.uniqueIds[idx]}>
                          <li className={styles.calendarDataList}>
                            <Link href={data.ORG_LINK} target="_blank">
                              {data.TITLE}
                            </Link>
                          </li>
                        </React.Fragment>
                      );
                    }
                  })}
                  {ele.API_calendarDataFilter.length > 4 ? (
                    <button>더보기</button>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div
            key={dateIdx + 1}
            className={styles.dateBox}
          > 
            <p className={styles.date} style={ele.cellStyle}>
              {ele.date}
            </p>
            <div className={styles.dateCultureList}>
              <ul>
                {ele.API_calendarDataFilter.map((data, idx) => {
                  if (idx < 5) {
                    return (
                      <React.Fragment key={ele.uniqueIds[idx]}>
                        <li className={styles.calendarDataList}>
                          <Link href={data.ORG_LINK} target="_blank">
                            {data.TITLE}
                          </Link>
                        </li>
                      </React.Fragment>
                    );
                  }
                })}
                {ele.API_calendarDataFilter.length > 4 ? (
                  <button onClick={()=>{handleClickMoreData(ele)}}>더보기</button>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
          ) 
        })}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        data={moreData}
      />
    </div>
  );
}
