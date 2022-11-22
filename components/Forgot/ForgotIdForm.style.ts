import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.section`
  width: 667px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px #0000001a;
  padding-top: 70px;
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadingContainer = styled.section`
  text-align: left;
  width: 331px;
  overflow: auto;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  color: #333333;
`;

export const SubHeading = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #767777;
  margin-bottom: 60px;
`;

interface UlProps {
  width?: string;
  height?: string;
}

export const UserIdList = styled("ul")<UlProps>`
  width: ${props => (props.width ? props.width : "453px")};
  height: ${props => (props.height ? props.height : "65px")};
  margin-bottom: 120px;
`;

export const UserIdItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Img = styled(Image)``;

export const UserId = styled.span`
  margin-left: 15px;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  text-decoration: underline;
`;

interface BtnContainerProps {
  width?: string;
  height?: string;
}

export const BtnContainer = styled("div")<BtnContainerProps>`
  width: ${props => (props.width ? props.width : "453px")};
  display: flex;
  flex-direction: column;

  button:not(:first-child) {
    margin-top: 20px;
  }
`;

export const LoginBtnContainer = styled.div``;

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
