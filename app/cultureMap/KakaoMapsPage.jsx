"use client";
import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";

// const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
const KAKAO_SDK_URL =
  "//dapi.kakao.com/v2/maps/sdk.js?appkey=aef3abaefb061efe91b76c22380204dc&autoload=false";
export default function KakaoMapsPage() {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: "500px" }}
      />
    </>
  );
}
