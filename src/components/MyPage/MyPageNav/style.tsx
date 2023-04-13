import styled from "@emotion/styled";

export const MyPageNav = styled.section``;

export const Title = styled.h1`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 4rem;
  letter-spacing: -0.05em;
  color: #333333;
  margin-bottom: 4rem;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 26.6rem;
    height: 6.7rem;
    border: 1px solid #f2f2f2;
    border-radius: 10px 10px 0px 0px;
    padding: 0 2rem 0 3rem;
    color: black;
  }
  span {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 25px;
    letter-spacing: -0.05em;
    color: #333333;
  }
`;
