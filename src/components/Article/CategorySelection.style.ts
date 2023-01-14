import styled from "@emotion/styled";

type LabelProps = {
  isSelected?: boolean;
};

export const CategorySelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 2rem;
    line-height: 25px;
    color: #333333;
  }
  input {
    width: 2rem;
    height: 2rem;
  }
`;

export const Label = styled.label<LabelProps>`
  font-family: "Spoqa Han Sans Neo";
  font-size: 2rem;
  line-height: 25px;
  color: #767777;
  font-weight: 400;
  color: ${props => (props.isSelected ? "#333333" : " #767777")};
`;

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

export const GradeSelection = styled.div`
  display: flex;
  gap: 3rem;
  div {
    display: flex;
    gap: 0.4rem;
  }
  p {
    padding-right: 3rem;
  }
`;

export const TestSelection = styled(GradeSelection)``;
