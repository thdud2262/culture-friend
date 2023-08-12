import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./s_layoutComp.module.css";

export default function FooterBar() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBar}>
        <div className={styles.profile}>
          <Image
            src={"/image/main.jpg"}
            alt="main-image"
            width={80}
            height={80}
          />
          <span>소영's 프로젝트</span>
        </div>
        <div className={styles.link}>
          <button className={styles.footerLink}>
            <Link href="https://github.com/thdud2262" target="_blank">
              <Image
                src={"/image/git.jpg"}
                alt="footer-gitLogo"
                width={30}
                height={30}
              />
              <span>Github</span>
            </Link>
          </button>
          <button className={styles.footerLink}>
            <Link
              href="https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355"
              target="_blank"
            >
              <Image
                src={"/image/notion.jpg"}
                alt="footer-notionLogo"
                width={30}
                height={30}
              />
              <span>Notion</span>
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
}
