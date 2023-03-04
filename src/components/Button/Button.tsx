import styled from "@emotion/styled";

interface ButtonProps {
  children: string | boolean;
  margin?: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  border?: string;
  onClick?: () => void;
}

const ButtonStyled = styled.button<ButtonProps>`
  width: ${props => props.width || "45.3rem"};
  height: ${props => props.height || "6.6rem"};
  background: ${props => props.background || "#26409A"};
  border: 1px solid ${props => props.border || ""};
  border-radius: 14px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: ${props => props.color || "white"};
  margin: ${props => props.margin || "0"};
  /* &:hover {
    background: #26409a;
    color: #ffffff;
  } */
`;

export default function Button({ children, ...props }: ButtonProps) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
