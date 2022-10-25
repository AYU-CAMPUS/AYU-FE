import styled from "@emotion/styled";

interface ButtonProps {
  children: string;
  margin?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const ButtonStyled = styled.button<ButtonProps>`
  width: ${props => props.width || "45.3rem"};
  height: ${props => props.height || "6.6rem"};
  background: #26409a;
  border-radius: 5px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: ${props => props.color || "white"};
  margin: ${props => props.margin || "0"};
  &:hover {
    background: #26409a;
    color: #ffffff;
  }
`;

export default function Button({ children, ...props }: ButtonProps) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
