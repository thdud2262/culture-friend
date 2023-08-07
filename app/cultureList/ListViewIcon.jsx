'use client'
import Link from "next/link";
import styles from "./s_cultureList.module.css";

import { FiList, FiGrid } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";


export default function ListViewIcon({handlePageStyle}) {
  return (
    <div className={styles.gridIcon}>
      <button onClick={() => handlePageStyle("list")}>
        <FiList />
      </button>
      <button onClick={() => handlePageStyle("grid")}>
        <FiGrid />
      </button>
      <Link
        href="/cultureCalendar"
        className={styles.navItem}
        style={{ fontSize: "26px", color: "gray" }}
      >
        <FaRegCalendarAlt />
      </Link>
    </div>
  );
}
