import React from "react";

import MainLayout from "../components/Layout/MainLayout";

function Home() {
  return <div>dd</div>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
