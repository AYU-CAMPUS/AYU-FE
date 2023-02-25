import Script from "next/script";
import React from "react";
import styled from "@emotion/styled";

import MainLayout from "../../../src/components/Layout/MainLayout";
import RegisterForm from "../../../src/components/Materials/RegisterForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RegisterMaterials() {
  return (
    <Container>
      <RegisterForm />
    </Container>
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
