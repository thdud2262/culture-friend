import React from "react";
import styles from "./s_cultureMap.module.css";
import KakaoMapsPage from "./KakaoMapsPage";
import MapSearch from "./MapSearch";
import CulturePlaceList from "./CulturePlaceList";

export default function cultureMap() {
  return (
    <>
      <div className={styles.cultureMap}>
        <h1>내 주변 공연장 지도</h1>
        <div className={styles.mapBox}>
          <MapSearch />
          <KakaoMapsPage />
        </div>
        <h1>공연장 리스트</h1>
        <CulturePlaceList />
      </div>
    </>
  );
}
