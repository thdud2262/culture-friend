import React from "react";
import Link from "next/link";
import styles from "./layoutComp.module.css";
import HeaderSearchBar from "./HeaderSearchBar";
import LoginBtn from "./LoginBtn";

export default function HeaderBar({ username }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <Link href="/">나도 문화인</Link>
        <HeaderSearchBar />
      </div>
      <div className={styles.navBox}>
        <div className={styles.nav}>
          <div className={styles.mainItemBox}>
            <Link href="/cultureList" className={styles.navItem}>
              오늘의 공연
            </Link>
            {/* <Link href="/cultureMap" className={styles.navItem}>
            내 주변 공연장
          </Link> */}
            {username ? (
              <Link href={`/myPage/${username}`} className={styles.navItem}>
                마이페이지
              </Link>
            ) : null}
          </div>
          <div className={styles.loginBox}>
            <LoginBtn login={username ? true : false} username={username} />
          </div>
        </div>
      </div>
    </header>
  );
}
