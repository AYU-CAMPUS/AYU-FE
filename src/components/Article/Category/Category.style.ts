import styled from "@emotion/styled";

export const CategoryWrapper = styled.main`
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
  font-size: 20px;
  margin-bottom: 8px;
  font-family: "Spoqa Han Sans Neo";
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

export const ThumbnailDescription = styled.div`
  display: flex;
  align-items: center;
  height: 21rem;
  padding: 1.1rem 3rem 1.1rem 2.5rem;
  gap: 4.8rem;
`;

export const Thumbnail = styled.div`
  width: 13.6rem;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 4px solid red;
`;

export const Description = styled.div``;

export const Title = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #26409a;
  margin-bottom: 0.8rem;
`;

export const Content = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #333333;
`;

export const SpanWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #767777;
  margin-top: 2rem;
`;

export const RegisterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
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
