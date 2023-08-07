"use client";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import ExpandedViewText from "./ExpandedText";
import styles from "./s_modal.module.css";

export const Modal = ({ isOpen, onClose, data }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef(null);

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // 서버와 클라이언트를 동시지원하는 next.js에서
    // 클라이언트에서만 렌더링 될 수 있도록 useEffect와 useState를 통해 조건을 걸어놓고 modal을 구현
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    isOpen ? (
      <div
        className={styles.modalOverlay}
        onClick={handleOverlayClick}
        ref={modalRef}
      >
        <div className={styles.modalBox}>
          <p className={styles.modalTitle}>{data.date}일의 공연</p>
          <ul className={styles.moreData}>
            {data?.API_calendarDataFilter.map((d, idx) => {
              return (
                <li key={idx}>
                  <Link href={d.ORG_LINK} target="_blank">
                    <ExpandedViewText text={d.TITLE} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className={styles.modalClose} onClick={onClose}>
            닫기
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            {" "}
            X{" "}
          </button>
        </div>
      </div>
    ) : null,
    document.getElementById("modal-root")
  );
};
