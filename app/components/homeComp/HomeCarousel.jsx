"use client";
import react, { useState } from "react";
import styles from "../../styles/home.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const exImg = ["ex1.jpg", "ex2.jpg", "ex3.jpg", "ex4.jpg", "ex5.jpg"];

  const handlePrevBtn = () => {
    setCurrentSlide(currentSlide === 0 ? exImg.length - 1 : currentSlide - 1);
  };
  const handleNextBtn = () => {
    setCurrentSlide(currentSlide === exImg.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <>
      {exImg.map((i, idx) => {
        return (
          <div
            key={idx}
            className={styles.mainImgBox}
            style={{ display: idx === currentSlide ? "block" : "none" }}
          >
            <img src={`/image/${i}`} alt={`Slide ${idx}`} />
            <div className={styles.mainText}>
              <p>공연 제목입니다</p>
              <p>공연 장소입니다</p>
            </div>
            <button className={styles.leftBtn} onClick={handlePrevBtn}>
              <FiChevronLeft />
            </button>
            <button className={styles.rightBtn} onClick={handleNextBtn}>
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </>
  );
}
