import { ChangeEvent, FormEvent, useState } from "react";

import GuideMessage from "../GuideMessage/GuideMessage";

import * as Styled from "./SignUpForm.style";

interface Inputs {
  userId: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

function SignUpForm() {
  const [inputs, setInputs] = useState<Inputs>({
    userId: "",
    nickname: "",
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
      <Styled.Heading>회원가입</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.CertificationNumberInputContainer>
          <Styled.Label htmlFor="user-id">
            아이디
            <Styled.Input
              type="text"
              name="userId"
              value={inputs.userId}
              id="user-id"
              onChange={handleChange}
              placeholder="아이디를 입력해주세요"
              width="327px"
              height="65px"
              marginRight="10px"
            />
          </Styled.Label>
          <Styled.Button type="submit" width="116px" height="65px">
            중복확인
          </Styled.Button>
        </Styled.CertificationNumberInputContainer>
        <Styled.GuideMsgContainer>
          <GuideMessage
            errMsg="잘못된 아이디입니다."
            okMsg="사용가능한 아이디입니다."
          />
        </Styled.GuideMsgContainer>

        <Styled.Label htmlFor="password">
          비밀번호
          <Styled.Input
            type="text"
            name="password"
            value={inputs.password}
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
            type="text"
            name="password-confirm"
            value={inputs.passwordConfirm}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer>
          <GuideMessage
            errMsg="비밀번호가 일치하지 않습니다."
            okMsg="비밀번호가 일치합니다."
          />
        </Styled.ErrMsgContainer>

        <Styled.CertificationNumberInputContainer>
          <Styled.Label htmlFor="nickname">
            닉네임
            <Styled.Input
              type="text"
              name="nickname"
              value={inputs.nickname}
              onChange={handleChange}
              placeholder="닉네임을 입력해주세요"
              width="327px"
              height="65px"
              marginRight="10px"
            />
          </Styled.Label>
          <Styled.Button type="submit" width="116px" height="65px">
            중복확인
          </Styled.Button>
        </Styled.CertificationNumberInputContainer>
        <Styled.ErrMsgContainer last>
          <GuideMessage
            errMsg="중복된 닉네임입니다."
            okMsg="사용가능한 닉네임입니다."
          />
        </Styled.ErrMsgContainer>

        <Styled.SignUpBtnContainer>
          <Styled.Button primary type="submit">
            가입하기
          </Styled.Button>
        </Styled.SignUpBtnContainer>
      </Styled.Form>
    </Styled.Container>
  );
}

export default SignUpForm;
