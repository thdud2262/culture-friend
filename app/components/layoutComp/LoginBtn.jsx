"use client";
import { signIn, signOut } from "next-auth/react";
import styles from "./s_layoutComp.module.css";

export default function LoginBtn({ login, username }) {
  return (
    <>
      {login ? (
        <>
          <span className={styles.username}>{username} 님 </span>
          <button
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </button>
      )}
    </>
  );
}
