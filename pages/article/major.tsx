import React from "react";

import Major from "../../src/components/Article/Major/Major";
import MainLayout from "../../src/components/Layout/MainLayout";

function ArticleMajorPage() {
  return <Major />;
}

ArticleMajorPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleMajorPage;
