"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/searchPage.module.css";

export default function SearchBar() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleClickSearch = () => {
    router.push(`/searchPage/${encodeURIComponent(searchText)}`)
    setSearchText("");
  };

  return (
    <div>
      <input
        className={styles.searchInput}
        value={searchText || ""}
        placeholder="공연 제목을 검색합니다"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={handleClickSearch}>검색</button>
    </div>
  );
}
