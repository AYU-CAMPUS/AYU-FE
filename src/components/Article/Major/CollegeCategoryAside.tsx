import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "@emotion/styled";

type SectionProps = {
  height?: string;
};

interface DateCategoryProps extends SectionProps {
  categoryTitle: string;
  categoryNav: string[];
  selectDepartmentNav: string | string[];
  setSelectDepartmentNav: React.Dispatch<React.SetStateAction<string>>;
  setSelectDepartment: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectGrade: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectTest: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const NavButtonSection = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-width: 22.4rem;
  height: ${props => props.height || "37.3rem"};
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

export default function CollegeCategoryAside({ ...props }: DateCategoryProps) {
  const router = useRouter();

  const handleOptionClick = (department: string) => {
    props.setSelectDepartmentNav(department);
    props.setSelectDepartment([]);
    props.setSelectGrade([]);
    props.setSelectTest([]);
    props.setCurrentPage(1);
    router.replace(`/article/major?college=${department}`);
  };

  return (
    <NavButtonSection height={props.height}>
      <h2>{props.categoryTitle}</h2>
      {props.categoryNav.map(department => {
        const isSelected = props.selectDepartmentNav === department;
        return (
          <div key={department}>
            <Image src="/images/dot.svg" width="100%" height="100%" />
            <button
              type="button"
              style={isSelected ? { color: "#333333" } : undefined}
              onClick={() => handleOptionClick(department)}
            >
              {department}
            </button>
          </div>
        );
      })}
    </NavButtonSection>
  );
}
