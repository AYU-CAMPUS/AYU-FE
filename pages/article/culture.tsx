import React from "react";

import MainLayout from "../../src/components/Layout/MainLayout";
import Culture from "../../src/components/Article/Culture/Culture";

function ArticleCulturePage() {
  return <Culture />;
}

ArticleCulturePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleCulturePage;
