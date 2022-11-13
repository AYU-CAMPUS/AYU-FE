import styled from "@emotion/styled";

export const ManagerPageWrapper = styled.div`
  display: flex;
`;

export const ManagerPageContent = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  padding: 30px 0 0 36px;
  border-bottom: 1px solid #d9dbdf;
  height: 86px;
  div {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  span {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.03em;
    color: #394252;
  }
`;

export const ManagerSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 30px 36px;
  background: #ebedee;
`;
