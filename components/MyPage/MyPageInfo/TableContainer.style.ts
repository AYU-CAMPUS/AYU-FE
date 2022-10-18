import styled from "@emotion/styled";

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
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 21px;
    letter-spacing: -0.05em;
    color: #333333;
    height: 18.3rem;
  }
`;
