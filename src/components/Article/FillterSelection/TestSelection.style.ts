import styled from "@emotion/styled";

export const TestSelection = styled.div`
  display: flex;
  gap: 3rem;
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  p {
    padding-right: 3rem;
  }
`;

type LabelProps = {
  isSelected?: boolean;
};

export const Label = styled.label<LabelProps>`
  font-family: "Spoqa Han Sans Neo";
  font-size: 2rem;
  line-height: 25px;
  color: #767777;
  font-weight: 400;
  color: ${props => (props.isSelected ? "#333333" : " #767777")};
`;
