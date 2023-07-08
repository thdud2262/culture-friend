import React from "react";
import CultureList from "./CultureList";
import styles from "../styles/cultureList.module.css";
import TopScrollBtn from "../components/TopScrollBtn";

export default function cultureList() {
  
  return (
    <div className={styles.container}>
      <CultureList />
      <TopScrollBtn/>
    </div>
  );
}

// HOME-WORK
// 기본 보기 => new Date() 현재 달, 이전/다음 버튼 클릭하여 월 변경 => 해당 월의 공연 리스트
// 컴포넌트 버튼 => 그리드형 리스트형 보여주기 
// 제목을 검색해 리스트를 보여줄 수 있다 => 검색페이지 생성