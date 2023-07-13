"use client";
import React from "react";
import styles from "../styles/cultureMap.module.css";

export default function MapSearch() {
  const handleMapSearch = () => {
    console.log("search");
  };
  return (
    <div className={styles.searchBox}>
      <div className={styles.selectSearchBox}>
        <div>
          <span>위치</span>
          <select>
            <option value="종로구">종로구</option>
            <option value="중구">중구</option>
            <option value="용산구">용산구</option>
            <option value="영등포구">영등포구</option>
            <option value="송파구">송파구</option>
            <option value="서초구">서초구</option>
            <option value="서대문구">서대문구</option>
            <option value="마포구">마포구</option>
            <option value="동작구">동작구</option>
            <option value="동대문구">동대문구</option>
            <option value="노원구">노원구</option>
            <option value="금천구">금천구</option>
            <option value="구로구">구로구</option>
            <option value="광진구">광진구</option>
            <option value="강서구">강서구</option>
            <option value="강동구">강동구</option>
            <option value="강남구">강남구</option>
          </select>
        </div>
        <div>
          <span>장소</span>
          <select>
            <option value="도서관">도서관</option>
            <option value="미술관">미술관</option>
            <option value="공연장">공연장</option>
            <option value="박물관">박물관</option>
            <option value="예술회관">예술회관</option>
            <option value="기타">기타</option>
          </select>
        </div>
      </div>
      <div className={styles.buttonSearchBox}>
        <button>도서관</button>
        <button>미술관</button>
        <button>공연장</button>
        <button>박물관</button>
        <button>예술회관</button>
        <button>기타</button>
      </div>
      <button className={styles.searchBtn} onClick={handleMapSearch}>검색</button>
    </div>
  );
}
