import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  MyPageWrapper,
  MyProfile,
  MyPageList,
  MyPageNav,
  MyPageInfo,
} from "./mypage/mypage.style";

function Home() {
  const nickName = "닉네임";
  const router = useRouter();

  return (
    <MyPageWrapper>
      <MyProfile>
        <div className="profileDescription">
          <Image src="/images/Profile.png" width="80px" height="80px" />
          <p>{nickName}</p>
        </div>
        <div className="registerBtn">
          <button type="button" onClick={() => router.push("/")}>
            프로필 사진 변경
          </button>
          <button type="button" onClick={() => router.push("/")}>
            자료등록
          </button>
        </div>
      </MyProfile>
      <MyPageList>
        <button type="button">
          <p>다운로드 가능한 자료</p>
          <p>2건</p>
        </button>
        <button type="button">
          <p>교환 완료 수</p>
          <p>2건</p>
        </button>
        <button type="button">
          <p>내가 올린 자료</p>
          <p>10건</p>
        </button>
      </MyPageList>

      <div>
        <MyPageNav>
          <Link href="/">
            <a>내 정보</a>
          </Link>
          <Link href="/">
            <a>비밀번호 변경</a>
          </Link>
          <Link href="/">
            <a>내가 올린 자료</a>
          </Link>
          <Link href="/">
            <a>다운로드 가능한 자료</a>
          </Link>
          <Link href="/">
            <a>알림</a>
          </Link>
        </MyPageNav>
        <MyPageInfo>내정보</MyPageInfo>
      </div>
    </MyPageWrapper>
  );
}

export default Home;
