import React from "react";

import MainLayout from "../../../src/components/Layout/MainLayout";
import MailAuthForm from "../../../src/components/SignUp/MailAuthForm";

import * as Styled from "./SignUp.style";

function MailAuth() {
  return (
    <Styled.Container>
      <MailAuthForm />
    </Styled.Container>
  );
}

MailAuth.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MailAuth;
