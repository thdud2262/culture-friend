"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./cultureList.module.css";

export default function CultureMonth({curDate, handlePrevMonth, handleNextMonth, text}) {
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
    {text && <div className={styles.noText}>공연 정보가 없습니다</div> }
    </>
  );
}
