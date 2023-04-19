import styled from "@emotion/styled";

export const CultureWrapper = styled.main`
  padding: 6rem 26.5rem 0 26.5rem;
`;

export const SchoolInfo = styled.div`
  display: flex;
  gap: 4rem;
`;

export const KeyWordArticleSection = styled.section`
  width: 100%;
`;

export const GuideLine = styled.p`
  font-size: 16px;
  font-family: "Spoqa Han Sans Neo";
  margin-top: 9.4rem;
  margin-bottom: 8px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableContainer = styled.table`
  border-top: 2px solid #abaeaf;
  width: 100%;
  margin-bottom: 1.5rem;
  td:nth-child(2) {
    color: #26409a;
  }
  th,
  td {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
  td {
    font-weight: 400;
  }
  .articleTitle {
    cursor: pointer;
  }
  .exchangeStatus {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 28px;
    letter-spacing: -0.05em;
    color: #333333;
    height: 16.8rem;
  }
`;

export const CategorySection = styled.section`
  width: 100%;
  height: 10.9rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 3.2rem;
`;

export const FillterSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 2rem;
    line-height: 25px;
    color: #333333;
  }
  input {
    width: 2rem;
    height: 2rem;
  }
`;

export const RegisterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 13rem;
    height: 4.9rem;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
`;
