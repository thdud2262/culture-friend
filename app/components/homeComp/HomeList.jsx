import styles from "./s_home.module.css";
import HomeListItem from "./HomeListItem";

export default function HomeList({ subTitle, codename }) {
  return (
    <div className={styles.cultureListBox}>
      <div className={styles.subTitleBox}>
        <h1 className={styles.subTitle}>{subTitle}</h1>
      </div>
      <HomeListItem codename={codename} />
    </div>
  );
}
