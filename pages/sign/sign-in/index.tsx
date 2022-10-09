import React from "react";
import styled from "@emotion/styled";

import MainLayout from "../../../components/Layout/MainLayout";
import LoginForm from "../../../components/Login/LoginForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Login;
