import Image from "next/image";
import React from "react";
import * as Styled from "./AsideNavbar.style";
import { navbarData } from "../NavbarData";

interface IAsideNavbarProps {
  selectNavbar: string;
  setSelectNavbar: React.Dispatch<React.SetStateAction<string>>;
}

export default function AsideNavbar({
  selectNavbar,
  setSelectNavbar,
}: IAsideNavbarProps) {
  return (
    <Styled.AsideNavbarWrapper>
      <Styled.Title>AYU Manager Page</Styled.Title>

      <Styled.NavbarWrapper>
        {navbarData.map(navbar => {
          const isSelected = selectNavbar === navbar.content;
          return (
            <div
              key={navbar.id}
              style={isSelected ? { background: "#49546A" } : undefined}
            >
              <Image src={navbar.image} width="24px" height="24px" />
              <button
                type="button"
                onClick={(): void => {
                  setSelectNavbar(navbar.content);
                }}
              >
                {navbar.content}
              </button>
            </div>
          );
        })}
      </Styled.NavbarWrapper>
    </Styled.AsideNavbarWrapper>
  );
}
