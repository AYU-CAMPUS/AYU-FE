import styled from "@emotion/styled";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 70rem;
  position: absolute;
  top: 21rem;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ModalTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  h2 {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 3rem;
    line-height: 38px;
    letter-spacing: -0.05em;
    color: #333333;
  }
`;

export const BoundaryLine = styled.div`
  width: 70rem;
  border: 1px solid #dedede;
`;

export const ReasonSelection = styled.main`
  padding: 2.5rem 5rem 0 5rem;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 28px;
    letter-spacing: -0.05em;
    color: #333333;
    margin-bottom: 0.5rem;
  }
  span {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #767777;
  }
`;

export const RadioSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  margin: 2.5rem 0 3rem 0;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    width: 3rem;
    height: 3rem;
    background: #ffffff;
    border: 1px solid #dedede;
    margin: 0 1.5rem 0 0;
  }
  span {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 2rem;
    line-height: 25px;
    letter-spacing: -0.05em;
    color: #333333;
  }
`;
