import styles from "./styles/home.module.css";
import HomeList from "./components/homeComp/HomeList";
import HomeCarousel from "./components/homeComp/HomeCarousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeCarousel />
      <HomeList subTitle={"오늘! 공연/전시 정보"} codename={null} />
      <HomeList subTitle={"CLASSIC"} codename={"클래식"} />
      <HomeList subTitle={"뮤지컬 / 오페라"} codename={"뮤지컬/오페라"} />
      <HomeList subTitle={"전시 / 미술"} codename={"전시/미술"} />
      <HomeList subTitle={"세종문화회관"} codename={null} />
      {/* http://openAPI.seoul.go.kr:8088/(인증키)/JSON/SJWPerform/1/5 */}
    </main>
  );
}
