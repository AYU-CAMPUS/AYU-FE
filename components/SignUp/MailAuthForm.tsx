import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import tw from "twin.macro";
import {
  useVerificationCode,
  // usePostVerificationCode,
} from "../../hooks/api/useVerificationCode";

import ErrorMessage from "../GuideMessage/GuideMessage";

import * as Styled from "./SignUpForm.style";

function MailAuthForm() {
  const [studentWebMail, setStudentWebMail] = useState<string>("");
  // 인증번호 받는 중임을 나타내는 상태
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleStudentWebMailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStudentWebMail(event.target.value);
  };

  // 사용자가 입력한 인증번호와 서버가 제공한 인증번호 토큰을 보관하는 상태 객체
  const [verificationUserInput, setVerificationUserInput] = useState("");
  const [, setVerificationCodeToken] = useState("");

  const handleVerificationUserInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationUserInput(event.target.value);
  };

  const { data, refetch } = useVerificationCode(
    ["verificationCode", studentWebMail],
    { email: studentWebMail }
  );

  useEffect(() => {
    if (data) {
      setVerificationCodeToken(data.verificationCode);
      // 임시로 인증번호 바로 입력되도록 설정
      setVerificationUserInput(data.code);
    }
  }, [data]);

  const handleGetVerificationCode = async () => {
    setIsAuthenticating(true);
    refetch();
  };

  // 회원가입을 위한 인증번호 확인 POST 요청
  // useMutation을 사용한다. uri: POST /user/sign-up/confirm/verification-code;
  const router = useRouter();
  // react-query의 useMutation을 사용해서 인증번호 확인 요청을 보낸다.
  // const { mutate, isLoading, isError, error } = usePostVerificationCode(
  //   ["postVerificationCode", verificationCodeToken, verificationUserInput],
  //   {
  //     verificationCodeToken,
  //     verificationUserInput,
  //   }
  // );

  const handleVerificationCodeSubmit = (event: FormEvent) => {
    event.preventDefault();

    // 인증번호가 일치하지 않는 경우
    // if (verificationCodeToken !== verificationUserInput) {
    //   return;
    // }

    // 인증번호가 일치하는 경우
    // 회원가입 페이지로 이동한다.
    router.push("/sign/sign-up");
  };

  const [isTriggerVerificationCode] = useState(false);
  const [isVerificationCodeValid] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleGetVerificationCode();
  };

  return (
    <Styled.Container>
      <Styled.Heading>학교 웹 메일 인증</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label
          htmlFor="studentWebMail"
          last={isAuthenticating ? "40px" : "80px"}
        >
          웹 메일
          <div css={[tw`flex`]}>
            <Styled.Input
              width="50%"
              type="text"
              name="studentWebMail"
              value={studentWebMail || ""}
              onChange={handleStudentWebMailChange}
              placeholder="웹 메일을 입력해주세요"
            />
            <Styled.Input
              disabled
              width="50%"
              type="text"
              name="studentWebMailDomain"
              value="@gs.anyang.ac.kr"
              border
            />
          </div>
        </Styled.Label>
        {/* <Styled.ErrMsgContainer last={!isAuthenticating}>
          {<ErrorMessage errMsg="잘못된 웹 메일입니다." />}
        </Styled.ErrMsgContainer> */}

        {isAuthenticating && (
          <>
            <Styled.CertificationNumberInputContainer>
              <Styled.Label htmlFor="certificationNumber">
                인증번호
                <Styled.Input
                  type="text"
                  name="certificationNumber"
                  value={verificationUserInput || ""}
                  onChange={handleVerificationUserInputChange}
                  placeholder="인증번호를 입력해주세요"
                  width="327px"
                  height="65px"
                  marginRight="10px"
                />
                <Styled.RemainingTime>00:00</Styled.RemainingTime>
              </Styled.Label>
              <Styled.Button
                type="button"
                onClick={handleGetVerificationCode}
                disabled={isTriggerVerificationCode}
                width="116px"
                height="65px"
              >
                재발송
              </Styled.Button>
            </Styled.CertificationNumberInputContainer>
            <Styled.ErrMsgContainer last>
              {isTriggerVerificationCode && !isVerificationCodeValid && (
                <ErrorMessage errMsg="잘못된 인증번호입니다." />
              )}
            </Styled.ErrMsgContainer>
            <Styled.SignUpBtnContainer>
              <Styled.Button
                primary
                disabled={verificationUserInput.length === 0}
                type="button"
                onClick={handleVerificationCodeSubmit}
              >
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
