import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 265px;
`;

const Header = styled.header`
  height: 103px;
  padding-top: 30px;
`;
// Logo 임시 스타일링
const FirstLogoText = styled.span`
  font-weight: 700;
  font-size: 34px;
  line-height: 42.57px;
  margin-right: 8px;
  color: #26409a;
`;

const SecondLogoText = styled.span`
  font-weight: 500;
  font-size: 34px;
  line-height: 42.57px;
  color: #26409a;
`;

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <a>
            <FirstLogoText>AYU</FirstLogoText>
            <SecondLogoText>campus</SecondLogoText>
          </a>
        </Link>
      </Header>
      {children}
    </Container>
  );
}
