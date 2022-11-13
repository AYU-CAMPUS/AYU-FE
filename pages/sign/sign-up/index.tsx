import React from "react";

import MainLayout from "../../../components/Layout/MainLayout";
import SignUpForm from "../../../components/SignUp/SignUpForm";

import * as Styled from "./SignUp.style";

function SignUp() {
  return (
    <Styled.Container>
      <SignUpForm />
    </Styled.Container>
  );
}

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default SignUp;
