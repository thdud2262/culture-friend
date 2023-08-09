"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./home.module.css";

// util함수 import
import {
  API_WeekendFilterFunc,
  API_SortFunc,
  serviceKey,
} from "@/app/util/utils";

// ICON import
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true)

  // API호출
  useEffect(() => {
    fetch(`/api/post/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'serviceKey': serviceKey, 'type': 'carousel' }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.culturalEventInfo) return null;
        const lists = result.culturalEventInfo.row;
        const dataSortList = API_SortFunc(lists);
        const endFilterList = API_WeekendFilterFunc(dataSortList);
        setApiData(endFilterList);
      });
  }, []);

  // Main_Carousel auto-play
  useEffect(()=>{
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide === apiData.length - 1 ? 0 : currentSlide + 1
        );
      }, 2500);
    }
    return () => clearInterval(intervalId);
  },[isPlaying, apiData.length ])

  const handlePrevBtn = () => {
    setCurrentSlide(currentSlide === 0 ? apiData.length - 1 : currentSlide - 1);
  };
  const handleNextBtn = () => {
    setCurrentSlide(currentSlide === apiData.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
      {apiData?.map((i, idx) => {
        return (
          <div
            key={idx}
            className={styles.mainImgBox}
            style={{ display: idx === currentSlide ? "block" : "none" }}
          >
            <p className={styles.mainSubText} >D-day <br/> 20일 공연 LIST</p>
            {/* 리스트를 할까말까 고민중. */}

            <button className={styles.autoPlayBtn} onClick={()=>{setIsPlaying((isPlaying)=> !isPlaying)}}>
              {isPlaying? <GiPauseButton/> :<FaPlay /> }
            </button>
            <img src={i.MAIN_IMG} alt={i.PROGRAM} width={300} height={400} />
            <div className={styles.mainText}>
              <div>
                <p>{i.TITLE}</p>
                <p>{i.PLACE}</p>
                <p>{i.DATE}</p>
                <Link href={i.ORG_LINK} target="_blank">
                  자세히 보기
                </Link>
              </div>
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
