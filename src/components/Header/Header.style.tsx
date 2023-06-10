import styled from "@emotion/styled";

export const HeadWrapper = styled.header`
  padding: 3rem 26.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 5rem;

    @media (max-width: 768px) {
      gap: 2rem;
    }
  }
`;

export const BoundaryLine = styled.div`
  width: 100%;
  border: 1px solid #abaeaf;
`;
