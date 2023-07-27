import styles from "../../styles/home.module.css";
import Link from "next/link";
import CultureListBox from "./CultureListBox";

export default function HomeList({ subTitle, codename }) {
  return (
    <div className={styles.cultureListBox}>
      <div className={styles.subTitleBox}>
        <h1 className={styles.subTitle}>{subTitle}</h1>
        <Link href="/cultureList" className={styles.subLink}>상세페이지 이동</Link>
      </div>
      <CultureListBox codename={codename} />
    </div>
  );
}
