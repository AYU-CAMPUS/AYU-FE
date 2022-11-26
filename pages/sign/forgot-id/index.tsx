import React from "react";

import MainLayout from "../../../components/Layout/MainLayout";
import ForgotIdForm from "../../../components/Forgot/ForgotIdForm";

import * as Styled from "./ForgotId.style";

function ForgotId() {
  return (
    <Styled.Container>
      <ForgotIdForm />
    </Styled.Container>
  );
}

ForgotId.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ForgotId;
