import styled from "@emotion/styled";

export const AsideNavbarWrapper = styled.aside`
  width: 341px;
  min-height: 100vh;
  background: #313c52;
`;

export const Title = styled.h2`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: #93cefa;
  margin-bottom: 36px;
  padding: 36px 0 0 30px;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    gap: 30px;
    height: 68px;
    padding: 0 0 0 30px;
  }
  button {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.03em;
    color: #e7e9ec;
    margin-bottom: 0px;
  }
`;
