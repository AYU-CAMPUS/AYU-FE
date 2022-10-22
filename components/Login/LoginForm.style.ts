import styled from "@emotion/styled";

export const Container = styled.section`
  width: 667px;
  height: 685px;
  margin-top: 57px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px #0000001a;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  color: #333333;
`;

export const Form = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  label:not(:first-child) {
    margin-top: 40px;
  }

  button:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  color: #333333;

  input {
    margin-top: 5px;
    display: block;
    width: 453px;
    height: 65px;
    font-weight: 400;
    font-size: 18px;
    padding-left: 15px;
    border: 1px solid #dcddde;
    border-radius: 5px;

    &:focus {
      border: 1px solid #333333;
    }
  }
`;

export const ErrMsgContainer = styled.div`
  padding-top: 10px;
`;

export const ForgotLinkContainer = styled.section`
  text-align: right;
  padding: 15px 0;

  a {
    color: #333333;
    padding: 0 10px;

    &:not(:last-child) {
      border-right: 1px solid black;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

export const LoginBtnContainer = styled.div`
  margin-top: 25px;
`;

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled("button")<ButtonProps>`
  width: 100%;
  height: 66px;
  font-weight: 400;
  font-size: 22px;
  border-radius: 5px;
  border: 1px solid #26409a;
  background-color: ${props => (props.primary ? "#26409A" : "#FFF")};
  color: ${props => (props.primary ? "#FFF" : "#26409A")};
`;
