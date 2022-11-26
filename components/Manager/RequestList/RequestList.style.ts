import styled from "@emotion/styled";

export const RequestListTable = styled.table`
  margin-top: 30px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid #d9dbde;
  th,
  td {
    border: 1px solid #d9dbde;
  }
  td:nth-last-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  th {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.03em;
    color: #394252;
  }
  td {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.05em;
    color: #394252;
  }
`;

export const AcceptanceBtn = styled.button`
  width: 90px;
  height: 39px;
  background: #ffffff;
  border: 1px solid #26409a;
  border-radius: 5px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #26409a;
`;
export const RefuseBtn = styled(AcceptanceBtn)`
  background: #000000;
  color: #ffffff;
`;
