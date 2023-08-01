"use client";
import { useEffect, useState } from "react";
import styles from "../styles/cultureList.module.css";
import { v4 as uuidv4 } from "uuid";

// component_import
import { API_FilterFunc, API_SortFunc } from "../util/utils";
import CultureListItem from "./CultureListItem";
import CultureMonth from "./CultureMonth";
import ListViewIcon from "./ListViewIcon";
import CodeNameBtn from "./CodeNameBtn";

export default function CultureList() {
  const date = new Date();
  const [curDate, setCurDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });
  const [codename, setCodename] = useState(" ");
  const urlDate = `${curDate.year}-${String(curDate.month + 1).padStart(
    2,
    "0"
  )}`;

  const [cultureList, setCultureList] = useState([]);
  const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/500/${codename}/ /${urlDate}`;
  const [pageStyle, setPageStyle] = useState("grid");

  useEffect(() => {
    fetch(url, {
      method: "GET",
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
        const filterList = API_FilterFunc(dataSortList);
        setCultureList(filterList);
      });
  }, [urlDate, codename, pageStyle]);

  const handlePrevMonth = () => {
    setCurDate((state) => {
      const prevMonth = state.month - 1;
      const prevYear = state.year;
      if (state.month < 1) {
        return { ...state, month: 11, year: prevYear - 1 };
      }
      return { ...state, month: prevMonth };
    });
  };
  const handleNextMonth = () => {
    setCurDate((state) => {
      const nextMonth = state.month + 1;
      const nextYear = state.year;
      if (state.month == 11) {
        return { ...state, month: 0, year: nextYear + 1 };
      }
      return { ...state, month: nextMonth };
    });
  };

  const handleSearchCodeName = (c) => {
    if (c == "전체") {
      setCodename(" ");
      return;
    }
    setCodename(c);
  };

  const handlePageStyle = (style) => {
    setPageStyle(style);
  };

  if (cultureList == null) {
    return (
      <CultureMonth
        curDate={curDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        text={cultureList == null ? "공연정보가 없습니다" : ""}
      />
    );
  }

  if (cultureList.length < 1) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <div>
        <div className={styles.cultureNav}>
          <CultureMonth
            curDate={curDate}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            text={cultureList == null ? "공연정보가 없습니다" : ""}
          />
          <ListViewIcon handlePageStyle={handlePageStyle} />
        </div>
        <CodeNameBtn handleSearchCodeName={handleSearchCodeName} />
        
        <div className={pageStyle == "grid" ? styles.gridBox : styles.listBox}>
          {cultureList.map((list, idx) => {
            return <CultureListItem key={idx} style={pageStyle} list={list} />;
          })}
        </div>
      </div>
    </>
  );
}
