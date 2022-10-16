import { ChangeEvent, FormEvent, useState } from "react";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import * as Styled from "./SignUpForm.style";

interface Inputs {
  userName: string;
  studentNumber: string;
}

function SignUpForm() {
  const [inputs, setInputs] = useState<Inputs>({
    userName: "",
    studentNumber: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    alert(inputs);
  };

  console.log(inputs);

  return (
    <Styled.Container>
      <Styled.Heading>학교 웹메일 인증</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor="user-id">
          이름
          <input
            type="text"
            name="userName"
            id="user-id"
            value={inputs.userName || ""}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer>
          <ErrorMessage msg="잘못된 이름입니다." />
        </Styled.ErrMsgContainer>

        <Styled.Label htmlFor="studentNumber">
          학번
          <input
            type="text"
            name="studentNumber"
            value={inputs.studentNumber || ""}
            onChange={handleChange}
            placeholder="학번을 입력해주세요"
          />
        </Styled.Label>
        <Styled.ErrMsgContainer last>
          <ErrorMessage msg="잘못된 학번입니다." />
        </Styled.ErrMsgContainer>

        <Styled.SignUpBtnContainer>
          <Styled.Button primary type="submit">
            인증번호 받기
          </Styled.Button>
        </Styled.SignUpBtnContainer>
      </Styled.Form>
    </Styled.Container>
  );
}

export default SignUpForm;
