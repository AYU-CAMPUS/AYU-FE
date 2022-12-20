import React from "react";
import Detail from "../../components/Article/Detail";

import MainLayout from "../../components/Layout/MainLayout";

function ArticleDetailPage() {
  return <Detail />;
}

ArticleDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleDetailPage;
