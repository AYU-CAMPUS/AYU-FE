import React from "react";

import MainLayout from "../../../src/components/Layout/MainLayout";
import ForgotPasswordForm from "../../../src/components/Forgot/ForgotPasswordForm";

import * as Styled from "./ForgotPassword.style";

function ForgotPassword() {
  return (
    <Styled.Container>
      <ForgotPasswordForm />
    </Styled.Container>
  );
}

ForgotPassword.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ForgotPassword;
