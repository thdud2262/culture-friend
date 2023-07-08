import React from "react";
import CultureList from "./CultureList";
import styles from "../styles/cultureList.module.css";
import TopScrollBtn from "../components/TopScrollBtn";

export default function cultureList() {
  return (
    <div className={styles.container}>
      <h1>오늘의 공연 / 전시</h1>
      {/* - 전체 list를 불러온 다음에, 
      리스트 컴포넌트에서 정렬, 검색 등을 통해 이 달의 공연을 날짜순으로 보여준다.
      월을 변경하면 해당 월에 맞게 필터 및 정렬하여 공연 리스트를 보여준다. <br/>
      - 메인에서 CODENAME에 따라서 내용을 보여줄 수 있다 <br/>
      - 제목을 검색하여 내용을 보여줄 수 있다 - 검색페이지 생성해야겠네 <br/>
      - 날짜, 장소와 같이 상세 검색은 list컴포넌트에서 JS로 검색한 후 보여준다 ( query검색으로 안될경우)<br/> */}
      <CultureList />
      <TopScrollBtn/>
    </div>
  );
}
