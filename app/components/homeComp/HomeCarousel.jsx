import styles from "../../styles/home.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HomeCarousel() {
  return (
    <div className={styles.mainImgBox}>
      <img src={"image/ex1.jpg"} />
      <div className={styles.mainText}>
        <p>공연 제목입니다</p>
        <p>공연 장소입니다</p>
      </div>
      <button className={styles.leftBtn}>
        <FiChevronLeft />
      </button>
      <button className={styles.rightBtn}>
        <FiChevronRight />
      </button>
    </div>
  );
}
