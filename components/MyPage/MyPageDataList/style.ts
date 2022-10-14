import styled from "@emotion/styled";

export const MyPageDataList = styled.section`
  .dataInfo {
    display: flex;
  }
  .downloadBtn,
  .exchangeBtn,
  .dataBtn,
  .exchangeInfo {
    width: 26.6rem;
    height: 19.5rem;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 1rem;
    padding: 3rem 0 0 3rem;
  }
  .description {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 2.8rem;
    letter-spacing: -0.05em;
    color: #333333;
  }
  .downloadResults,
  .completeResults,
  .dataResults,
  .exchageResults {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 3.5rem;
    letter-spacing: -0.05em;
    color: #26409a;
    margin-top: 3.5rem;
  }
  .exchangeInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 54.2rem;
    height: 8.1rem;
    margin-top: 1rem;
    padding: 0 3rem 0 4rem;
    .exchageResults {
      margin-top: 0rem;
    }
  }
`;
