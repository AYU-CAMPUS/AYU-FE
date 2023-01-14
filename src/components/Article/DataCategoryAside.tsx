import Image from "next/image";
import styled from "@emotion/styled";
import dot from "../../public/images/dot.svg";

type SectionProps = {
  height?: string;
};

type CategoryDataProps = {
  id: number;
  description: string;
};

interface DateCategoryProps extends SectionProps {
  categoryTitle: string;
  categoryData: CategoryDataProps[];
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

export default function DataCategoryAside({
  categoryTitle,
  categoryData,
  height,
}: DateCategoryProps) {
  return (
    <NavButtonSection height={height}>
      <h2>{categoryTitle}</h2>
      {categoryData.map(Major => {
        return (
          <div key={Major.id}>
            <Image src={dot} />
            <button type="button">{Major.description}</button>
          </div>
        );
      })}
    </NavButtonSection>
  );
}
