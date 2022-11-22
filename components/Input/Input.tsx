import styled from "@emotion/styled";

interface InputProps {
  width?: string;
  padding?: string;
}

const InputStyled = styled.input<InputProps>`
  width: ${props => props.width || "53.1rem"};
  padding: ${props => props.padding || "1.5rem 2.5rem;"};
  background: #ffffff;
  border: 2px solid #26409a;
  border-radius: 5px;
  ::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    letter-spacing: -0.1em;
    color: #767777;
  }
`;

export default function Input({ ...props }: InputProps) {
  return (
    <InputStyled {...props} placeholder="원하는 자료 키워드를 검색해 보세요" />
  );
}
