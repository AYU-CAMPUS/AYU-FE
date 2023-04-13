import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import * as Styled from "./style";
import { ButtonProps, MyProps } from "./types";

const Button = styled.button<ButtonProps>`
  color: ${props => (props.isSelected ? "#26409A" : "#000")};
  background: ${props => (props.isSelected ? "#FAFAFA;" : "#FFFFFF")};
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
            <Button
              type="button"
              isSelected={selectMenuNav === menu}
              onClick={() => buttonClickHandler(menu)}
              key={menu}
            >
              <span>{menu}</span>
              <Image src="/images/ArrowBtn.png" width="13px" height="13px" />
            </Button>
          );
        })}
      </Styled.NavWrapper>
    </Styled.MyPageNav>
  );
}

export default MyPageNav;
