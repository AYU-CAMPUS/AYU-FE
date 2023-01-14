import * as Styled from "./ForgotIdForm.style";

function ForgotIdForm() {
  return (
    <Styled.Container>
      <Styled.HeadingContainer>
        <Styled.Heading>아이디를 찾았습니다.</Styled.Heading>
        <Styled.SubHeading>아이디 확인 후 로그인해주세요.</Styled.SubHeading>
        <Styled.UserIdList>
          <Styled.UserIdItem>
            <Styled.Img
              src="/images/defaultUserIcon.svg"
              alt="default user icon"
              width="54"
              height="54"
            />
            <Styled.UserId>abcdjasd90900</Styled.UserId>
          </Styled.UserIdItem>
        </Styled.UserIdList>
      </Styled.HeadingContainer>
      <Styled.BtnContainer style={{ marginBottom: 154 }}>
        <Styled.LoginBtnContainer>
          <Styled.Button type="button">비밀번호 찾기</Styled.Button>
        </Styled.LoginBtnContainer>
        <Styled.Button primary type="submit">
          로그인
        </Styled.Button>
      </Styled.BtnContainer>
    </Styled.Container>
  );
}

export default ForgotIdForm;
