import { ChangeEvent, FormEvent, useState } from "react";

import ErrorMessage from "../GuideMessage/GuideMessage";

import * as Styled from "./SignUpForm.style";

interface Inputs {
  userName: string;
  studentNumber: string;
  certificationNumber: string;
}

function MailAuthForm() {
  const [inputs, setInputs] = useState<Inputs>({
    userName: "",
    studentNumber: "",
    certificationNumber: "",
  });
  // 인증번호 받는 중임을 나타내는 상태
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuthenticating(true);
  };

  return (
    <Styled.Container>
      <Styled.Heading>학교 웹메일 인증</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor="user-name">
          이름
          <Styled.Input
            type="text"
            name="userName"
            id="user-name"
            value={inputs.userName || ""}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer>
          {/* TODO: ErrorMessageContainer안에서 메시지만 토글하는 방식으로 변경 */}
          <ErrorMessage msg="잘못된 이름입니다." />
        </Styled.ErrMsgContainer>

        <Styled.Label htmlFor="studentNumber">
          학번
          <Styled.Input
            type="text"
            name="studentNumber"
            value={inputs.studentNumber || ""}
            onChange={handleChange}
            placeholder="학번을 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer last={!isAuthenticating}>
          <ErrorMessage msg="잘못된 학번입니다." />
        </Styled.ErrMsgContainer>

        {isAuthenticating && (
          <>
            <Styled.CertificationNumberInputContainer>
              <Styled.Label htmlFor="certificationNumber">
                인증번호
                <Styled.Input
                  type="text"
                  name="certificationNumber"
                  value={inputs.certificationNumber || ""}
                  onChange={handleChange}
                  placeholder="인증번호를 입력해주세요"
                  width="327px"
                  height="65px"
                  marginRight="10px"
                />
                <Styled.RemainingTime>00:00</Styled.RemainingTime>
              </Styled.Label>
              <Styled.Button type="submit" width="116px" height="65px">
                재발송
              </Styled.Button>
            </Styled.CertificationNumberInputContainer>
            <Styled.ErrMsgContainer last>
              <ErrorMessage msg="잘못된 인증번호입니다." />
            </Styled.ErrMsgContainer>
            <Styled.SignUpBtnContainer>
              <Styled.Button primary disabled type="submit">
                확인
              </Styled.Button>
            </Styled.SignUpBtnContainer>
            ``
          </>
        )}

        {!isAuthenticating && (
          <Styled.SignUpBtnContainer>
            <Styled.Button primary type="submit">
              인증번호 받기
            </Styled.Button>
          </Styled.SignUpBtnContainer>
        )}
      </Styled.Form>
    </Styled.Container>
  );
}

export default MailAuthForm;
