"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/cultureList.module.css";
import { v4 as uuidv4 } from "uuid";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiList, FiGrid } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CultureList() {
  const date = new Date();
  const [curDate, setCurDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });
  const [codename, setCodename] = useState(" ");
  const [title, setTitle] = useState(" ");
  const urlDate = `${curDate.year}-${String(curDate.month + 1).padStart(
    2,
    "0"
  )}`;

  const [cultureList, setCultureList] = useState([]);
  const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/10/${codename}/${title}/${urlDate}`;
  const [pageStyle, setPageStyle] = useState("grid");

  // CODENAME 검색
  const codenameKey = [
    "전체",
    "교육",
    "연극",
    "클래식",
    "뮤지컬/오페라",
    "콘서트",
    "축제",
  ];

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
        const sortedList = listCopy.sort((a, b) => {
          const dateA = new Date(a.DATE.split("~")[0]);
          const dateB = new Date(b.DATE.split("~")[0]);
          return dateA - dateB;
        });
        setCultureList(sortedList);
      });
  }, [curDate, codename, title, pageStyle]);

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
    console.log(style);
    setPageStyle(style);
  };
  if (cultureList == null) {
    return (
      <>
        <div className={styles.cultureMonth}>
          <button onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>
          <h1>
            {curDate.year}년 &nbsp;
            <span>{curDate.month + 1}</span>월의 공연 / 전시
          </h1>
          <button onClick={handleNextMonth}>
            <IoIosArrowForward />
          </button>
        </div>
        <div>공연 정보가 없습니다</div>
      </>
    );
  }

  if (cultureList.length < 1) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <div>
        <div className={styles.cultureNav}>
          <div className={styles.cultureMonth}>
            <button onClick={handlePrevMonth}>
              <IoIosArrowBack />
            </button>
            <h1>
              {curDate.year}년 &nbsp;
              <span>{curDate.month + 1}</span>월의 공연 / 전시
            </h1>
            <button onClick={handleNextMonth}>
              <IoIosArrowForward />
            </button>
          </div>
          <div className={styles.gridIcon}>
            <button onClick={() => handlePageStyle("list")}>
              <FiList />
            </button>
            <button onClick={() => handlePageStyle("grid")}>
              <FiGrid />
            </button>
          </div>
        </div>
        {codenameKey.map((c) => {
          const uniqueId = uuidv4();
          return (
            <button key={uniqueId} onClick={() => handleSearchCodeName(c)}>
              {c}
            </button>
          );
        })}

        <div className={pageStyle === "grid" ? styles.gridBox : styles.listBox}>
          {cultureList.map((li) => {
            const uniqueId = uuidv4();
            if (pageStyle == "grid") {
              return (
                <div key={uniqueId} className={styles.list}>
                  <img src={li.MAIN_IMG} />
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
                  </div>
                </div>
              );
            } else if (pageStyle == "list") {
              return (
                <div key={uniqueId} className={styles.list}>
                  <img src={li.MAIN_IMG} />
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
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

// CODENAME에 따라 LIST를 다르게 보여줄 수 있다
