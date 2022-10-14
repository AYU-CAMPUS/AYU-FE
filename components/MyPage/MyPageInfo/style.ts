import styled from "@emotion/styled";

export const MyPageInfo = styled.section`
  margin-left: 5.8rem;
  .titleDescription {
    display: flex;
    align-items: center;
    h2 {
      font-family: "Spoqa Han Sans Neo";
      font-style: normal;
      font-weight: 400;
      font-size: 3rem;
      line-height: 3.8rem;
      letter-spacing: -0.05em;
      color: #333333;
      margin-right: 1.5rem;
    }
    span {
      font-family: "Spoqa Han Sans Neo";
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 23px;
      letter-spacing: -0.05em;
      color: #767777;
      margin-top: 1rem;
    }
  }
  .formWrapper {
    display: flex;
    justify-content: center;
  }

  .nickName,
  .name,
  .data,
  .changePassword,
  .passwordConfirm {
    display: flex;
    align-items: center;
    margin-top: 4.5rem;
    padding-right: 12rem;
  }
  .changePassword,
  .passwordConfirm {
    padding-right: 4rem;
  }

  label {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #333333;
    width: 9.7rem;
  }
  .changelabel,
  .confirmlabel {
    width: 12.7rem;
  }
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
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #8f9091;
  }

  .duplicateVerificationBtn {
    width: 11.6rem;
    height: 6.5rem;
    background: #ffffff;
    border: 1px solid #26409a;
    border-radius: 5px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 28px;
    letter-spacing: -0.05em;
    color: #26409a;
    margin: 0 0 0 1rem;
  }
  .saveBtn,
  .completeBtn {
    width: 45.3rem;
    height: 6.6rem;
    background: #26409a;
    border-radius: 5px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 28px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }
  .saveBtn {
    margin: 4rem 0 0 9.7rem;
  }
  .completeBtn {
    margin: 4rem 0 0 12.7rem;
  }

  .withdrwal {
    display: flex;
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #8f9091;
    border-bottom: 1px solid #8f9091;
    margin: 8rem 0 23rem 29.5rem;
  }
  .errorMessage {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    letter-spacing: -0.05em;
    color: #dd4e48;
    margin: 1rem 0 0 10rem;
  }
`;

export const BoundaryLine = styled.div`
  width: 95rem;
  height: 0;
  border: 2px solid #abaeaf;
  margin: 4rem 0 0.5rem 0;
`;

export const TableContainer = styled.table`
  width: 100%;
  .registrationDate,
  .subject,
  .dataName,
  .edit,
  .download,
  .writer,
  .date,
  .applicant,
  .acceptanceStatus {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
  .registrationDateData,
  .subjectData,
  .dataNameData,
  .writerData,
  .dateData,
  .applicantData {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.05em;
  }
  .registrationDateData {
    font-size: 18px;
    line-height: 23px;
    color: #767777;
  }
  .subjectData {
    font-size: 17px;
    line-height: 21px;
    color: #26409a;
  }
  .dataNameData,
  .writerData,
  .dateData,
  .applicantData {
    font-size: 17px;
    line-height: 21px;
    color: #333333;
  }
  .downloadBtn {
    border-radius: 5px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 21px;
    letter-spacing: -0.05em;
    color: #26409a;
    width: 81px;
    height: 31px;
    background: #ffffff;
    border: 1px solid #26409a;
    border-radius: 5px;
  }

  .acceptBtn,
  .refuseBtn {
    width: 7.1rem;
    height: 3.1rem;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.7rem;
    border-radius: 5px;
    line-height: 21px;
    letter-spacing: -0.05em;
  }
  .acceptBtn {
    background: #ffffff;
    border: 1px solid #26409a;
    color: #26409a;
    margin-right: 0.5rem;
  }
  .refuseBtn {
    background: #000000;
    color: #ffffff;
  }

  .exchangeStatus {
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
    height: 18.3rem;
  }
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
  .content {
    margin-left: 2rem;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
  .contentEmphasis {
    color: #fbd100;
  }
`;

export const NotificationNoContent = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 21px;
  letter-spacing: -0.05em;
  color: #333333;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36rem;
`;
