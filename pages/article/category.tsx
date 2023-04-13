import React from "react";

import MainLayout from "../../src/components/Layout/MainLayout";
import Category from "../../src/components/Article/Category/Category";

function ArticleCategoryPage() {
  return <Category />;
}

ArticleCategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleCategoryPage;
