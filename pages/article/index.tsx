import React from "react";
import MainLayout from "../../src/components/Layout/MainLayout";

function ArticlePage() {
  return <div>dd</div>;
}

ArticlePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ArticlePage;
