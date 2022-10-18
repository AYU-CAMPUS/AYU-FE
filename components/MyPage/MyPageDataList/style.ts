import styled from "@emotion/styled";

export const MyPageDataList = styled.section``;

export const DataInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Download = styled.article`
  width: 26.6rem;
  height: 19.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 3rem 0 0 3rem;
`;

export const Exchange = styled(Download)`
  display: inline-block;
`;

export const Data = styled(Download)`
  display: inline-block;
`;

export const ExchangeInfo = styled(Download)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 54.2rem;
  height: 8.1rem;
  margin-top: 1rem;
  padding: 0 3rem 0 4rem;
  & button:last-child {
    margin-top: 0;
  }
`;

export const Description = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.8rem;
  letter-spacing: -0.05em;
  color: #333333;
`;

export const DataBtn = styled.button`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.5rem;
  letter-spacing: -0.05em;
  color: #26409a;
  margin-top: 3.5rem;
`;
