import styled from "@emotion/styled";

export const MyProfile = styled.section`
  padding: 4rem 0 0 4rem;
  min-width: 44.6rem;
  height: 28.6rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 1rem;
  P {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 3.5rem;
    letter-spacing: -0.05em;
    color: #333333;
    margin-left: 2rem;
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;
export const ProfileBtn = styled.button`
  width: 36rem;
  height: 5.5rem;
  background: #f4f4f5;
  border-radius: 10px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #333333;
`;

export const RegisterBtn = styled(ProfileBtn)``;
