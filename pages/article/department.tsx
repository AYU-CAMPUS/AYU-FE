import React from "react";
import Department from "../../src/components/Article/Department";

import MainLayout from "../../src/components/Layout/MainLayout";

function ArticleDepartmentPage() {
  return <Department />;
}

ArticleDepartmentPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleDepartmentPage;
