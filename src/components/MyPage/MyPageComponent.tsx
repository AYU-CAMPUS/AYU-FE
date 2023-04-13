import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import Swal from "sweetalert2";
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
import { apiInstance } from "../../pages/api/setting";

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
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_APP_BASE_URL;

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
    try {
      const result = await apiInstance.get("/user");
      console.log(result);
      setUserInfo(result.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          await Swal.fire({
            title:
              "<span style='font-size:18px; line-height: 23px'>로그인을 해야 접근이 가능합니다.</span>",
            confirmButtonText:
              "<button style='font-size:18px; width:128px; background: #26409A; height:45px; border-radius: 10px; color: white;'>확인</button>",
            width: 380,
            heightAuto: true,
            color: "#000000",
            confirmButtonColor: "white",
          });
        }
        router.push(`${url}/oauth2/authorization/google`);
      }
    }
  };

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
