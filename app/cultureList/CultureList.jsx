"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../styles/cultureList.module.css";

export default function CultureList() {
  const today = new Date().toISOString().slice(0,7);
  console.log(today)

  const [date, setDate] = useState(today);
  const [cultureList, setCultureList] = useState([]);
  const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;

  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/100/ / /${today}`;

  console.log(cultureList);
  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        const lists = result.culturalEventInfo.row;
        // const list = lists.filter((el, idx) => {
        //   return el.DATE.split("-")[1] === "07";
        // });
        // console.log("해당 월 원본", list);
        // // 해당 월의 DATE기준으로 정렬
        const listCopy = [...lists];
        const sortedList = listCopy.sort((a, b) => {
          const dateA = new Date(a.DATE.split("~")[0]);
          const dateB = new Date(b.DATE.split("~")[0]);
          return dateA - dateB;
        });
        setCultureList(sortedList);
        // setCultureList(lists);
      });
  }, []);

  const handleMoveUrl = (moveUrl) => {
    window.open(moveUrl, "_blank");
  };
  const onClick = () => {
    // 전체 데이터 중에서 7월공연만 검색
    // const list = lists.filter((li, idx) => {
    //   return li.DATE.split("-")[1] === "07";
    // });
    // console.log("해당 월 원본", list);
    // 해당 월의 DATE기준으로 정렬
    // const listCopy = [...list];
    // const sortedList = listCopy.sort((a, b) => {
    //   const dateA = new Date(a.DATE.split("~")[0]);
    //   const dateB = new Date(b.DATE.split("~")[0]);
    //   return dateA - dateB;
    // });
    // console.log("날짜정렬", sortedList);
    // DATE기준으로 정렬
    // 복사 후 정렬해야함 -> 원본도 같이 정렬됨ㅋㅋ
    // const copy = [...lists];
    // const sortedList = copy.sort((a, b) => {
    //   // console.log(new Date(a.DATE.split("~")[0]));
    //   const dateA = new Date(a.DATE.split("~")[0]);
    //   const dateB = new Date(b.DATE.split("~")[0]);
    //   return dateA - dateB;
    // });
    // console.log("복사+정렬", sortedList);
    // query로 데이터 검색 못하면 해결책 : get DATA에서 list에서 구 검색
    // const list = lists.filter((li, idx) => {
    //   return li.GUNAME === "서초구";
    // });
  };

  if (cultureList.length < 1) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <div>
        <div className={styles.listBox}>
          {cultureList.map((li, idx) => {
            return (
              <div
                key={idx}
                className={styles.list}
                onClick={() => {
                  window.open(li.ORG_LINK, "_blank");
                  // handleMoveUrl(li.ORG_LINK);
                }}
              >
                <img src={li.MAIN_IMG} />
                <div>
                  <p className={styles.codeName}>{li.CODENAME}</p>
                  <p className={styles.date}>{li.DATE}</p>
                  <p className={styles.title}>{li.TITLE}</p>
                  <p className={styles.place}>공연 장소: {li.PLACE}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
