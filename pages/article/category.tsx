import React from "react";
import Category from "../../src/components/Article/Category";
import MainLayout from "../../src/components/Layout/MainLayout";

function ArticleCategoryPage() {
  return <Category />;
}

ArticleCategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleCategoryPage;
