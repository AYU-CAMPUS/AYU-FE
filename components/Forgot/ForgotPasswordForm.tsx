import { ChangeEvent, FormEvent, useState } from "react";

import GuideMessage from "../GuideMessage/GuideMessage";

import * as Styled from "./ForgotPasswordForm.style";

interface Inputs {
  password: string;
  passwordConfirm: string;
}

function ForgotPasswordForm() {
  const [inputs, setInputs] = useState<Inputs>({
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Styled.Container>
      <Styled.Heading>비밀번호 재설정</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor="password">
          비밀번호
          <Styled.Input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="특수문자 포함 숫자 9~15자 입력해주세요."
          />
        </Styled.Label>
        <Styled.ErrMsgContainer>
          <GuideMessage
            errMsg="잘못된 비밀번호입니다."
            okMsg="올바른 비밀번호입니다."
          />
        </Styled.ErrMsgContainer>

        <Styled.Label htmlFor="password-confirm">
          비밀번호 확인
          <Styled.Input
            type="password"
            name="password-confirm"
            value={inputs.passwordConfirm || ""}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer last>
          <GuideMessage
            errMsg="비밀번호가 일치하지 않습니다."
            okMsg="비밀번호가 일치합니다."
          />
        </Styled.ErrMsgContainer>

        <Styled.SignUpBtnContainer>
          <Styled.Button primary type="submit">
            확인
          </Styled.Button>
        </Styled.SignUpBtnContainer>
      </Styled.Form>
    </Styled.Container>
  );
}

export default ForgotPasswordForm;
