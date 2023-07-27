import Image from "next/image";
import styles from "./styles/page.module.css";
import { v4 as uuidv4 } from "uuid";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CultureListBox from "./components/homeComp/cultureListBox";

export default function Home() {
  // const [codename, setCodename] = useState(" ");
  // const handleSearchCodeName = (c) => {
  //   if (c == "전체") {
  //     setCodename(" ");
  //     return;
  //   }
  //   setCodename(c);
  // };
  const codenameKey = [
    "전체",
    "교육",
    "연극",
    "클래식",
    "뮤지컬/오페라",
    "콘서트",
    "축제",
    "전시/미술",
  ];

  return (
    <main className={styles.main}>
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

      <div className={styles.cultureListBox}>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>오늘! 공연/전시 정보</h1>
          <p>상세페이지 이동</p>
        </div>
        <CultureListBox/>
      </div>
      <div className={styles.cultureListBox}>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>theme 공연/전시 정보</h1>
          <p>상세페이지 이동</p>
        </div>
        {codenameKey.map((c) => {
          const uniqueId = uuidv4();
          return (
            <button key={uniqueId}>
              {c}
            </button>
          );
        })}
        <CultureListBox codename={'클래식'}/>
      </div>
      
      <div className={styles.cultureContentBox}>
        <div className={styles.subTitleBox}>
          <h1 className={styles.subTitle}>문화 콘텐츠</h1>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <div className={styles.contentSubTitleBox}>
              <p className={styles.contentSubTitle}>YouTube</p>
              <p className={styles.more}>더보기</p>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloribus porro, repudiandae ipsa optio eum architecto corrupti
            </p>
            <img src={"image/ex1.jpg"} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentSubTitleBox}>
              <p className={styles.contentSubTitle}>내 주변 문화공간</p>
              <p className={styles.more}>더보기</p>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloribus porro, repudiandae ipsa optio eum architecto corrupti
            </p>
            <img src={"image/ex1.jpg"} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentSubTitleBox}>
              <p className={styles.contentSubTitle}>공연 모임 생성</p>
              <p className={styles.more}>더보기</p>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              doloribus porro, repudiandae ipsa optio eum architecto corrupti
            </p>
            <img src={"image/ex1.jpg"} />
          </div>
        </div>
      </div>
      <div>
        <p>세종문화회관</p>
        {/* http://openAPI.seoul.go.kr:8088/(인증키)/JSON/SJWPerform/1/5 */}
      </div>
    </main>
  );
}
