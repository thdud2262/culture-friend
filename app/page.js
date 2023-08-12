import HomeList from "./components/homeComp/HomeList";
import HomeCarousel from "./components/homeComp/HomeCarousel";

export default function Page() {
  return (
    <main>
      <HomeCarousel />
      <HomeList subTitle={"오늘! 공연/전시 정보"} codename={null} />
      <HomeList subTitle={"CLASSIC"} codename={"클래식"} />
      <HomeList subTitle={"전시 / 미술"} codename={"전시/미술"} />
      <HomeList subTitle={"콘서트"} codename={"콘서트"} />
    </main>
  );
}
