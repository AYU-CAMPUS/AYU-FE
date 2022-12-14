import React from "react";

import MainLayout from "../../../components/Layout/MainLayout";
import LoginForm from "../../../components/Login/LoginForm";

import * as Styled from "./SignIn.style";

function Login() {
  return (
    <Styled.Container>
      <LoginForm />
    </Styled.Container>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Login;
