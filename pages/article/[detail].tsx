import React from "react";
import Detail from "../../src/components/Article/Detail";

import MainLayout from "../../src/components/Layout/MainLayout";

function ArticleDetailPage() {
  return <Detail />;
}

ArticleDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleDetailPage;
