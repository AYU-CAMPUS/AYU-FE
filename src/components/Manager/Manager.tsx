import Image from "next/image";
import { useState } from "react";
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import * as Styled from "./Manager.style";
import HamburgerIcon from "../../../public/images/hamburger.svg";
import NavbarTitle from "./NavbarTitle";
import { navbarData } from "./NavbarData";
import Dashboard from "./Dashboard/Dashboard";
import RequestList from "./RequestList/RequestList";
import UserManagement from "./UserManagement/UserManagement";
import CommentReport from "./CommentReport/CommentReport";
import NavbarInfo from "./NavbarInfo/NavbarInfo";
import ArticleReport from "./ArticleReport/ArticleReport";

export default function ManagerComponent() {
  const defaultSelect = navbarData[0].content;
  const [selectNavbar, setSelectNavbar] = useState(defaultSelect);
  const [selected, setSelected] = useState(false);

  const selectNavbarComponentList = [
    {
      component: <Dashboard />,
      content: "Dashboard",
      id: 0,
    },
    {
      component: <RequestList />,
      content: "신청글 리스트",
      id: 1,
    },
    {
      component: <UserManagement />,
      content: "유저관리",
      id: 2,
    },
    {
      component: <CommentReport />,
      content: "댓글 신고",
      id: 3,
    },
    {
      component: <ArticleReport />,
      content: "게시글 신고",
      id: 4,
    },
  ];

  return (
    <Styled.ManagerPageWrapper>
      {selected ? (
        <AsideNavbar
          selectNavbar={selectNavbar}
          setSelectNavbar={setSelectNavbar}
        />
      ) : null}

      <Styled.ManagerPageContent>
        <Styled.Header>
          <div>
            <button type="button" onClick={() => setSelected(!selected)}>
              <Image src={HamburgerIcon} width="19px" height="16px" />
            </button>
            <span>Dashboard</span>
          </div>
        </Styled.Header>

        <NavbarTitle selectNavbar={selectNavbar} />
        <Styled.ManagerSection>
          <NavbarInfo
            selectNavbarComponentList={selectNavbarComponentList}
            selectNavbar={selectNavbar}
          />
        </Styled.ManagerSection>
      </Styled.ManagerPageContent>
    </Styled.ManagerPageWrapper>
  );
}
