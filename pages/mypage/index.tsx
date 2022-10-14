import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./mypage.style";
import Profile from "../../components/MyPage/MyPageProfile/Profile";
import DataList from "../../components/MyPage/MyPageDataList/DataList";
import MyPageNav from "../../components/MyPage/MyPageNav/MyPageNav";
import Alarm from "../../components/MyPage/MyPageInfo/Notification";

function MyPage() {
  const router = useRouter();
  console.log(router.asPath);
  const menuNav = [
    "내 정보",
    "비밀번호 변경",
    "내가 올린 자료",
    "다운로드 가능한 자료",
    "교환신청 수락",
    "알림",
  ];
  const defaultSelect = menuNav[0];
  const [selectMenuNav, setSelectMenuNav] = useState(defaultSelect);

  return (
    <Styled.MyPageWrapper>
      <Styled.ProfileWrapper>
        <Profile />
        <DataList />
      </Styled.ProfileWrapper>
      <Styled.MypageNavInfo>
        <MyPageNav
          menuNav={menuNav}
          selectMenuNav={selectMenuNav}
          setSelectMenuNav={setSelectMenuNav}
        />
        <Alarm />
      </Styled.MypageNavInfo>
    </Styled.MyPageWrapper>
  );
}

export default MyPage;
