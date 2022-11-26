import React from "react";

import MainLayout from "../../../components/Layout/MainLayout";
import MailAuthForm from "../../../components/SignUp/MailAuthForm";

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
