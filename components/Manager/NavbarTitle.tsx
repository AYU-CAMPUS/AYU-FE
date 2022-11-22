import styled from "@emotion/styled";

const Title = styled.div`
  display: flex;
  padding: 18px 0 0 34px;
  gap: 10px;
  height: 66px;
`;

const Home = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #2f20d2;
`;

const Content = styled(Home)`
  color: #8c93a1;
`;

interface IProps {
  selectNavbar: string;
}

export default function NavbarTitle({ selectNavbar }: IProps) {
  return (
    <Title>
      <Home>홈</Home>
      <Content>/</Content>
      <Content>{selectNavbar}</Content>
    </Title>
  );
}
