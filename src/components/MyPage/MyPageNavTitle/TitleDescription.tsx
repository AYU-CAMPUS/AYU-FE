import * as Styled from "../MyPageInfo/MyPageInfo.style";

interface IProps {
  title: string;
  description: string;
}

function TitleDescription({ title, description }: IProps) {
  return (
    <Styled.TitleDescriptionWrapper>
      <h2>{title}</h2>
      <span>{description}</span>
    </Styled.TitleDescriptionWrapper>
  );
}
export default TitleDescription;
