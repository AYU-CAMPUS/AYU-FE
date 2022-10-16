import styled from "@emotion/styled";

export const Container = styled.section`
  width: 667px;
  margin-top: 57px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px #0000001a;
  padding-top: 70px;
  padding-bottom: 54px;
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

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  button:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  position: relative;
`;

interface InputProps {
  inline?: boolean;
  width?: string;
  height?: string;
  marginRight?: string;
}

export const Input = styled("input")<InputProps>`
  margin-top: 5px;
  display: ${props => (props.inline ? "inline-block" : "block")};
  width: ${props => (props.width ? props.width : "453px")};
  height: ${props => (props.height ? props.height : "65px")};
  margin-right: ${props => (props.marginRight ? props.marginRight : "0")};
  font-weight: 400;
  font-size: 18px;
  padding-left: 15px;
  border: 1px solid #dcddde;
  border-radius: 5px;

  &:focus {
    border: 1px solid #333333;
  }
`;

interface ErrMsgContainerProps {
  last?: boolean;
}

export const ErrMsgContainer = styled("div")<ErrMsgContainerProps>`
  padding-top: 10px;
  margin-bottom: ${props => (props.last ? "40px" : "0")};
  height: 40px;
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

export const SignUpBtnContainer = styled.div``;

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
}

export const Button = styled("button")<ButtonProps>`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "66px")};
  font-weight: 400;
  font-size: 22px;
  border-radius: 5px;
  border: 1px solid ${props => (props.disabled && "#ddd") || "#26409a"};
  background-color: ${props =>
    (props.disabled && "#ddd") || (props.primary ? "#26409A" : "#FFF")};
  color: ${props =>
    (props.disabled && "#fff") || (props.primary ? "#FFF" : "#26409A")};
`;

export const CertificationNumberInputContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const RemainingTime = styled.p`
  position: absolute;
  top: 47px;
  right: 26px;
  font-weight: 500px;
  font-size: 20px;
  color: #dd4e48;
`;
