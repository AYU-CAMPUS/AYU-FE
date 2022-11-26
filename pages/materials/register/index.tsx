import Script from "next/script";
import React from "react";

import MainLayout from "../../../components/Layout/MainLayout";
import RegisterForm from "../../../components/Materials/RegisterForm";

import * as Styled from "./Register.style";

function RegisterMaterials() {
  return (
    <Styled.Container>
      <RegisterForm />
    </Styled.Container>
  );
}

RegisterMaterials.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <Script src="https://unpkg.com/react-tabs/dist/react-tabs.development.js" />
      {page}
    </MainLayout>
  );
};

export default RegisterMaterials;
