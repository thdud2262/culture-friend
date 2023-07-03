import Image from "next/image";
import styles from "./page.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imgBox}>
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
      <div className={styles.cultureListBox}>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>공연/전시 정보</h1>
          <p>상세페이지 이동</p>
        </div>
        <div className={styles.listBox}>
          <div className={styles.list}>
            <img src={"image/ex1.jpg"} />
            <p className={styles.listTitle}>공연제목입니다</p>
            <p className={styles.listDate}>2023.07.03 - 2023.07.06</p>
            <p className={styles.listLocation}>공연장입니다</p>
          </div>
          <div className={styles.list}>
            <img src={"image/ex1.jpg"} />
            <p className={styles.listTitle}>공연제목입니다</p>
            <p className={styles.listDate}>2023.07.03 - 2023.07.06</p>
            <p className={styles.listLocation}>공연장입니다</p>
          </div>
          <div className={styles.list}>
            <img src={"image/ex1.jpg"} />
            <p className={styles.listTitle}>공연제목입니다</p>
            <p className={styles.listDate}>2023.07.03 - 2023.07.06</p>
            <p className={styles.listLocation}>공연장입니다</p>
          </div>
          <div className={styles.list}>
            <img src={"image/ex1.jpg"} />
            <p className={styles.listTitle}>공연제목입니다</p>
            <p className={styles.listDate}>2023.07.03 - 2023.07.06</p>
            <p className={styles.listLocation}>공연장입니다</p>
          </div>
          <div className={styles.list}>
            <img src={"image/ex1.jpg"} />
            <p className={styles.listTitle}>공연제목입니다</p>
            <p className={styles.listDate}>2023.07.03 - 2023.07.06</p>
            <p className={styles.listLocation}>공연장입니다</p>
          </div>
          <div className={styles.list}>
            <img src={"image/ex1.jpg"} />
            <p className={styles.listTitle}>공연제목입니다</p>
            <p className={styles.listDate}>2023.07.03 - 2023.07.06</p>
            <p className={styles.listLocation}>공연장입니다</p>
          </div>
        </div>
      </div>
      <div className={styles.cultureContentBox}>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>문화 콘텐츠</h1>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <div className={styles.subTitleBox}>
              <p className={styles.subTitle}>YouTube</p>
              <p className={styles.more}>더보기</p>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloribus porro, repudiandae ipsa optio eum architecto corrupti
            </p>
            <img src={'image/ex1.jpg'}/>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitleBox}>
              <p className={styles.subTitle}>YouTube</p>
              <p className={styles.more}>더보기</p>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloribus porro, repudiandae ipsa optio eum architecto corrupti
            </p>
            <img src={'image/ex1.jpg'}/>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitleBox}>
              <p className={styles.subTitle}>YouTube</p>
              <p className={styles.more}>더보기</p>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloribus porro, repudiandae ipsa optio eum architecto corrupti
            </p>
            <img src={'image/ex1.jpg'}/>
          </div>
        </div>
      </div>
    </main>
  );
}
