import React from "react";

import MainLayout from "../../../src/components/Layout/MainLayout";
import ForgotIdForm from "../../../src/components/Forgot/ForgotIdForm";

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
