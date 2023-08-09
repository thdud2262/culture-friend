import styles from "./cultureList.module.css";
import { v4 as uuidv4 } from "uuid";
import { FaHeart, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";

export default function CultureListItem({ list }) {
  const uniqueId = uuidv4();
  const today = new Date().toISOString().split("T")[0];
  const li_date = list.END_DATE.split(" ")[0];

  return (
    <div key={uniqueId} className={styles.list}>
      {/* <img src={list.MAIN_IMG} /> */}
      <img src="/image/ex1.jpg" />
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
          <span
            style={{
              color: "red",
              fontWeight: "700",
              fontSize: "12px",
            }}
          >
            {today > li_date ? " _ 공연 종료" : ""}
          </span>
        </p>
        <p className={styles.date}>{list.DATE}</p>
        <p className={styles.title}>{list.TITLE}</p>
        <p className={styles.place}>
          <span>공연 장소:</span> {list.PLACE}
        </p>
      </div>
    </div>
  );
}
