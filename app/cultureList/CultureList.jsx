"use client";
import { useEffect, useState } from "react";
import styles from "./s_cultureList.module.css";
// util함수 import
import { API_FilterFunc, API_SortFunc, serviceKey } from "../util/utils";
import { useMonthNavigation } from "../util/hooks/useMonthNavigator";
// component_import
import CultureListItem from "./CultureListItem";
import CultureMonth from "./CultureMonth";
import ListViewIcon from "./ListViewIcon";
import CodeNameBtn from "./CodeNameBtn";

export default function CultureList() {
  const todayDate = new Date();
  const { curDate, handlePrevMonth, handleNextMonth } =
    useMonthNavigation(todayDate);

  const [codename, setCodename] = useState(" ");
  const [cultureList, setCultureList] = useState([]);
  const [pageStyle, setPageStyle] = useState("grid");

  const urlDate = `${curDate.year}-${String(curDate.month + 1).padStart(
    2,
    "0"
  )}`;
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/500/${codename}/ /${urlDate}`;

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
