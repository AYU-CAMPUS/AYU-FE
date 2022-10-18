import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import * as Styled from "./style";
import { MyButtonProps, MyProps } from "./types";

const MyButton = styled.button<MyButtonProps>`
  border: ${props => (props.isSelected ? "1px solid #6600CC" : "none")};
  color: ${props => (props.isSelected ? "#6600CC" : "#000")};
`;

function MyPageNav({ menuNav, selectMenuNav, setSelectMenuNav }: MyProps) {
  const buttonClickHandler = (menu: string) => {
    setSelectMenuNav(menu);
    window.history.replaceState("", "", `/mypage?value=${menu}`);
  };

  return (
    <Styled.MyPageNav>
      <Styled.Title>마이 캠퍼스</Styled.Title>
      <Styled.NavWrapper>
        {menuNav.map(menu => {
          return (
            <MyButton
              type="button"
              isSelected={selectMenuNav === menu}
              onClick={() => buttonClickHandler(menu)}
              key={menu}
            >
              <span>{menu}</span>
              <Image src="/images/ArrowBtn.png" width="13px" height="13px" />
            </MyButton>
          );
        })}
      </Styled.NavWrapper>
    </Styled.MyPageNav>
  );
}

export default MyPageNav;
