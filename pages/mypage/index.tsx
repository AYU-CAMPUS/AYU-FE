import Image from "next/image";
import Link from "next/link";
import React from "react";

import MainLayout from "../../src/components/Layout/MainLayout";
import MyPageComponent from "../../src/components/MyPage/MyPageComponent";

function MyPage() {
  return <MyPageComponent />;
}

MyPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout
      links={[
        <span>
          <Link key="mypage" href="/mypage">
            마이페이지
          </Link>
        </span>,
        <span>
          <Link key="register/materials" href="/">
            자료등록
          </Link>
        </span>,
      ]}
      notifications={[
        <button
          type="button"
          onClick={() => {
            console.log("알림 클릭");
          }}
        >
          <Image
            key="exchangeMaterialAlarm"
            alt="exchangeMaterialAlarm"
            src="/images/exchangeMaterialAlarm.svg"
            width="32x"
            height="37px"
          />
        </button>,
        <button
          type="button"
          onClick={() => {
            console.log("알림 클릭");
          }}
        >
          <Image
            key="alarm"
            alt="alarm"
            src="/images/alarm.svg"
            width="32x"
            height="37px"
          />
          ,
        </button>,
      ]}
    >
      {page}
    </MainLayout>
  );
};

export default MyPage;
