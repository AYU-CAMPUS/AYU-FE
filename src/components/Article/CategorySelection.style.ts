import styled from "@emotion/styled";

export const MajorSelection = styled.div`
  display: flex;
  gap: 6rem;
`;

export const MajorWrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    align-items: center;
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
