import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import * as Styled from "./LoginForm.style";

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
    <Styled.Container>
      <Styled.Heading>로그인</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor="user-id">
          아이디
          <input
            type="text"
            name="userId"
            id="user-id"
            value={inputs.userId || ""}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer>
          <ErrorMessage msg="잘못된 아이디입니다." />
        </Styled.ErrMsgContainer>

        <Styled.Label htmlFor="password">
          비밀번호
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer>
          <ErrorMessage msg="잘못된 비밀번호입니다." />
        </Styled.ErrMsgContainer>

        <Styled.ForgotLinkContainer>
          <Link href="/forget-id">
            <a>아이디 찾기</a>
          </Link>
          <Link href="/forget-possword">
            <a>비밀번호 찾기</a>
          </Link>
        </Styled.ForgotLinkContainer>
        <Styled.LoginBtnContainer>
          <Styled.Button primary type="submit">
            로그인
          </Styled.Button>
        </Styled.LoginBtnContainer>
        <Styled.Button type="button">회원가입</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default LoginForm;
