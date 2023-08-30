'use client'
import styles from "../s_cultureList.module.css";
import { FaHeart, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";

export default function CultureListItem({ list }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.list}>
      <img src={list.MAIN_IMG} />
      <button className={styles.likeIcon}>
        {/* <FaHeart /> */}
        <FaRegHeart />
      </button>
      <div
        onClick={() => {
          window.open(list.ORG_LINK, "_blank");
        }}
      >
        <p className={styles.codeName}>
          {list.CODENAME}
          <span className={styles.endDate}>
            {today > (list.END_DATE.split(" ")[0]) ? " _ 공연 종료" : ""}
          </span>
        </p>
        <p className={styles.date}>{list.DATE}</p>
        <p className={styles.title}>{list.TITLE}</p>
        <p className={styles.place}>
          <span>공연 장소:</span> {list.PLACE}
        </p>
      </div>
    </div>
  )
}
