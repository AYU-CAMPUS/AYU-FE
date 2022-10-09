import styled from "@emotion/styled";

const Container = styled.section`
  width: 667px;
  height: 685px;
  margin-top: 57px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px #0000001a;

  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  color: #333333;
`;

function LoginForm() {
  function onChange() {
    console.log("onChange");
  }

  function onSubmit() {
    console.log("onSubmit");
  }

  return (
    <Container>
      <Heading>로그인</Heading>
      <form onSubmit={onSubmit}>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          data-testid="login-input"
          onChange={onChange}
        />
        <button type="submit">로그인</button>
        <button type="submit">회원가입</button>
      </form>
    </Container>
  );
}

export default LoginForm;
