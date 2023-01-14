import Script from "next/script";
import React from "react";

import MainLayout from "../../../src/components/Layout/MainLayout";

import * as Styled from "./Edit.style";

function EditMaterials() {
  return <Styled.Container />;
}

EditMaterials.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <Script src="https://unpkg.com/react-tabs/dist/react-tabs.development.js" />
      {page}
    </MainLayout>
  );
};

export default EditMaterials;
