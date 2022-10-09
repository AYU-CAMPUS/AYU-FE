import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import {
  Button,
  Container,
  ForgotLinkContainer,
  Form,
  Heading,
  Label,
  LoginButtonContainer,
} from "./LoginForm.style";

interface Inputs {
  userId?: string;
  password?: string;
}

function LoginForm() {
  const [inputs, setInputs] = useState<Inputs>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <Container>
      <Heading>로그인</Heading>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="user-id">
          아이디
          <input
            type="text"
            name="userId"
            id="user-id"
            value={inputs.userId || ""}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
        </Label>
        <Label htmlFor="password">
          비밀번호
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </Label>
        <ForgotLinkContainer>
          <Link href="/forget-id">
            <a>아이디 찾기</a>
          </Link>
          <Link href="/forget-possword">
            <a>비밀번호 찾기</a>
          </Link>
        </ForgotLinkContainer>
        <LoginButtonContainer>
          <Button primary type="submit">
            로그인
          </Button>
        </LoginButtonContainer>
        <Button type="button">회원가입</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
