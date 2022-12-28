import React from "react";
import Major from "../../components/Article/Major/Major";

import MainLayout from "../../components/Layout/MainLayout";

function ArticleMajorPage() {
  return <Major />;
}

ArticleMajorPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticleMajorPage;
