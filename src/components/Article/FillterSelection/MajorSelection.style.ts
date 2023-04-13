import styled from "@emotion/styled";

export const MajorSelection = styled.div`
  display: flex;
  gap: 6rem;
  p {
    margin-bottom: 11rem;
  }
`;

export const MajorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    display: flex;
    gap: 0.4rem;
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
