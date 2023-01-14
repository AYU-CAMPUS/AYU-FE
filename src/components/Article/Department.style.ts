import styled from "@emotion/styled";

export const ArtcleWrapper = styled.main`
  padding: 6rem 26.5rem 0 26.5rem;
`;

export const SchoolInfo = styled.div`
  display: flex;
  gap: 4rem;
`;

export const CategorySection = styled.section`
  width: 100%;
  height: 37.3rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 3.8rem 0 0 3.2rem;
`;

export const KeyWordArticleSection = styled.section`
  margin-top: 5rem;
  padding-left: 26.4rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
  button {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 49.1rem;
  }
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
    height: 18.3rem;
  }
`;

export const RegisterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rem;
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
