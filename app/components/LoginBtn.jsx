"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ login }) {
  return (
    <>
      {login ? (
        // <p>로그아웃</p>
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </button>
        // <p>로그인</p>
      )}
    </>
  );
}
