import React from "react";
import Category from "../../components/Article/Category/Category";
import MainLayout from "../../components/Layout/MainLayout";

function ArticleCategoryPage() {
  return <Category />;
}

ArticleCategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleCategoryPage;
