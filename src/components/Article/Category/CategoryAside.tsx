import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "@emotion/styled";
import dot from "../../../public/images/dot.svg";

interface DateCategoryProps {
  categoryTitle: string;
  categoryNav: string[];
  selectCultureNav: string | string[];
  setSelectCultureNav: React.Dispatch<React.SetStateAction<string>>;
  setSelectTest: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const NavButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-width: 22.4rem;
  height: 40.6rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2.5rem 0 0 1.5rem;
  h2 {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 28px;
    letter-spacing: -0.05em;
    color: #333333;
    margin-bottom: 1rem;
  }
  button {
    margin-left: 1.5rem;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #767777;
  }
  div {
    display: flex;
  }
`;

export default function CategoryAside({ ...props }: DateCategoryProps) {
  const router = useRouter();

  const handleOptionClick = (culture: string) => {
    props.setSelectCultureNav(culture);
    props.setSelectTest([]);
    props.setCurrentPage(1);
    router.replace(`/article/culture?category=${culture}`);
  };

  return (
    <NavButtonSection>
      <h2>{props.categoryTitle}</h2>
      {props.categoryNav.map(culture => {
        const isSelected = props.selectCultureNav === culture;
        return (
          <div key={culture}>
            <Image src={dot} />
            <button
              type="button"
              style={isSelected ? { color: "#333333" } : undefined}
              onClick={() => handleOptionClick(culture)}
            >
              {culture}
            </button>
          </div>
        );
      })}
    </NavButtonSection>
  );
}
