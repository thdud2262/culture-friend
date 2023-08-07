"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./s_cultureMap.module.css";

export default function CulturePlaceList() {
  const [placeList, setPlaceList] = useState([]);
  const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalSpaceInfo/1/10/`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.culturalSpaceInfo.row);
        setPlaceList(result.culturalSpaceInfo.row);
      });
  }, [placeList]);

  if (placeList.length < 1) {
    return <div> 로딩중 </div>;
  }

  return (
    <>
      <table className={styles.cultureTable}>
        <thead>
          <tr>
            <th style={{width:'25%'}}>장소이름</th>
            <th style={{width:'15%'}}>주제</th>
            <th style={{width:'30%'}}>주소</th>
            <th style={{width:'30%'}}>URL</th>
          </tr>
        </thead>
        <tbody>
          {placeList.map((list, idx) => {
            const uniqueId = uuidv4();
            return (
              <tr key={uniqueId}>
                <td>{list.FAC_NAME}</td>
                <td>{list.SUBJCODE}</td>
                <td>{list.ADDR}</td>
                <td>
                  <a
                    href={list.HOMEPAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {list.HOMEPAGE}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
