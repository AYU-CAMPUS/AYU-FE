import styled from "@emotion/styled";

export const MyPageInfo = styled.section`
  margin-left: 5.8rem;

  input {
    width: 45.3rem;
    height: 6.5rem;
    background: #ffffff;
    border: 1px solid #dcddde;
    border-radius: 5px;
    padding-left: 1.6rem;
  }
  .inputNickName {
    width: 32.7rem;
  }

  input::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #8f9091;
  }

  .errorMessage {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    letter-spacing: -0.05em;
    color: #dd4e48;
    margin: 1rem 0 0 10rem;
  }
`;

export const TitleDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.8rem;
    letter-spacing: -0.05em;
    color: #333333;
    margin-right: 1.5rem;
  }
  span {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #767777;
    margin-top: 1rem;
  }
`;

export const BoundaryLine = styled.div`
  width: 95rem;
  height: 0;
  border: 2px solid #abaeaf;
  margin: 4rem 0 0.5rem 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChangePassword = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.5rem;
`;

export const PasswordConfirm = styled(ChangePassword)``;
export const Name = styled(ChangePassword)``;
export const NickName = styled(ChangePassword)``;
export const Data = styled(ChangePassword)``;

export const ChangeLabel = styled.label`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #333333;
  width: 12.7rem;
`;
export const ConfirmLabel = styled(ChangeLabel)``;

export const NameLabel = styled(ChangeLabel)`
  width: 9.7rem;
`;
export const NickNameLabel = styled(NameLabel)``;
export const DataLabel = styled(NameLabel)``;

export const DuplicateVerificationBtn = styled.button`
  width: 11.6rem;
  height: 6.5rem;
  background: #ffffff;
  border: 1px solid #26409a;
  border-radius: 5px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 28px;
  letter-spacing: -0.05em;
  color: #26409a;
  margin: 0 0 0 1rem;
`;

export const Withdrwal = styled.button`
  display: flex;
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #8f9091;
  border-bottom: 1px solid #8f9091;
  margin: 8rem 0 23rem 29.5rem;
`;

export const NotificationDate = styled.h2`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 25px;
  letter-spacing: -0.05em;
  color: #4069f4;
  margin: 3rem 0 1.9rem 0;
`;

export const NotificationContent = styled.div`
  display: flex;
  align-items: center;
  width: 950px;
  height: 98px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding-left: 3rem;
  margin-bottom: 1rem;
  p {
    margin-left: 2rem;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
  span {
    color: #fbd100;
  }
`;

export const NotificationNoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 21px;
  letter-spacing: -0.05em;
  color: #333333;
  width: 100%;
  height: 36rem;
`;
