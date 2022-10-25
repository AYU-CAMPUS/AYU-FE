import React, { useState } from "react";
import * as Styled from "./MyPageComponent.style";
import Profile from "./MyPageProfile/Profile";
import DataList from "./MyPageDataList/DataList";
import MyPageNav from "./MyPageNav/MyPageNav";
import MyInformation from "./MyPageInfo/MyInformation";
import ChangePassword from "./MyPageInfo/ChangePassword";
import PostMyData from "./MyPageInfo/PostMyData";
import DownloadData from "./MyPageInfo/DownloadData";
import ExchangeAcceptance from "./MyPageInfo/ExchangeAcceptance";
import Notification from "./MyPageInfo/Notification";
import MyPageNavData, { IComponentProps } from "./MyPageNavData/MyPageNavData";

function MyPage() {
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

  const selectMenuComponentList: IComponentProps[] = [
    {
      component: <MyInformation />,
      menu: "내 정보",
      id: 0,
    },
    {
      component: <ChangePassword />,
      menu: "비밀번호 변경",
      id: 1,
    },
    {
      component: <PostMyData />,
      menu: "내가 올린 자료",
      id: 2,
    },
    {
      component: <DownloadData />,
      menu: "다운로드 가능한 자료",
      id: 3,
    },
    {
      component: <ExchangeAcceptance />,
      menu: "교환신청 수락",
      id: 4,
    },
    {
      component: <Notification />,
      menu: "알림",
      id: 5,
    },
  ];

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
        <MyPageNavData
          selectMenuComponentList={selectMenuComponentList}
          selectMenuNav={selectMenuNav}
        />
      </Styled.MypageNavInfo>
    </Styled.MyPageWrapper>
  );
}

export default MyPage;
