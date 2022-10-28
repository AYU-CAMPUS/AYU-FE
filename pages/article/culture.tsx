import React from "react";
import Culture from "../../components/Article/Culture";

import MainLayout from "../../components/Layout/MainLayout";

function ArticleCulturePage() {
  return <Culture />;
}

ArticleCulturePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleCulturePage;
