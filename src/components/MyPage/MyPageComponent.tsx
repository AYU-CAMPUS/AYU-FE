import { useEffect, useState } from "react";
import * as Styled from "./MyPageComponent.style";
import Profile from "./MyPageProfile/Profile";
import DataList from "./MyPageDataList/DataList";
import MyPageNav from "./MyPageNav/MyPageNav";
import MyInformation from "./MyPageInfo/MyInformation";
// import ChangePassword from "./MyPageInfo/ChangePassword";
import PostMyData from "./MyPageInfo/PostMyData";
import DownloadData from "./MyPageInfo/DownloadData";
import ExchangeAcceptance from "./MyPageInfo/ExchangeAcceptance";
// import Notification from "./MyPageInfo/Notification";
import MyPageNavData from "./MyPageNavData/MyPageNavData";
import { IComponentProps } from "./MyPageNavData/types";
import { apiInstance } from "../../../pages/api/setting";

interface IUserInfoProps {
  nickName: string;
  profileImage: string;
  exchangeSuccessCount: number;
  myDataCount: number;
  downloadCount: number;
  exchangeRequestCount: number;
  desiredData: string[];
}

function MyPage() {
  const menuNav = [
    "내 정보",
    // "비밀번호 변경",
    "내가 올린 자료",
    "다운로드 가능한 자료",
    "교환신청 수락",
    // "알림",
  ];
  const defaultSelect = menuNav[0];
  const [selectMenuNav, setSelectMenuNav] = useState(defaultSelect);

  const selectMenuComponentList: IComponentProps[] = [
    {
      component: <MyInformation />,
      menu: "내 정보",
      id: 0,
    },
    // {
    //   component: <ChangePassword />,
    //   menu: "비밀번호 변경",
    //   id: 1,
    // },
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
    // {
    //   component: <Notification />,
    //   menu: "알림",
    //   id: 5,
    // },
  ];

  const [userInfo, setUserInfo] = useState<IUserInfoProps>();

  const userAPI = async () => {
    const result = await apiInstance.get("/user");
    setUserInfo(result.data);
  };

  console.log(userInfo);

  useEffect(() => {
    userAPI();
  }, []);

  return (
    <Styled.MyPageWrapper>
      <Styled.ProfileWrapper>
        <Profile nickName={userInfo?.nickName} />
        <DataList
          downloadCount={userInfo?.downloadCount}
          exchangeRequestCount={userInfo?.exchangeRequestCount}
          exchangeSuccessCount={userInfo?.exchangeSuccessCount}
          myDataCount={userInfo?.myDataCount}
        />
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
