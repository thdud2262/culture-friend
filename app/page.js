import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>오늘의 공연</h1>
          <span>더 보기</span>
        </div>
      </div>
      <div>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>이달의 공연/전시 정보</h1>
          <span>더 보기</span>
        </div>
      </div>
      <div>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>더 볼거리 문화콘텐츠</h1>
          <span>더 보기</span>
        </div>
      </div>
    </main>
  );
}
