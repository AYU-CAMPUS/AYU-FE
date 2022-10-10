import styled from "@emotion/styled";

export const MyPageWrapper = styled.main`
  padding-left: 323px;
  padding-right: 323px;
  margin-top: 79px;
`;

export const ProfileWrapper = styled.section`
  display: flex;
`;

export const MyProfile = styled.section`
  padding-left: 40px;
  padding-top: 40px;
  width: 446px;
  height: 286px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 10px;
  .profileDescription {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  P {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.05em;
    color: #333333;
    margin-left: 20px;
  }
  .registerBtn {
    display: flex;
  }
  button {
    width: 180px;
    height: 55px;
    background: #f4f4f5;
    border-radius: 10px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
    margin-right: 10px;
  }
  button:last-child {
    margin-right: 0px;
  }
`;
export const MyPageList = styled.section`
  button {
    width: 266px;
    height: 195px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 10px;
  }
  button:last-child {
    margin-right: 0px;
  }
`;
export const MyPageNav = styled.section``;
export const MyPageInfo = styled.section``;
