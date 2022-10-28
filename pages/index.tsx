import React from "react";

import MainLayout from "../components/Layout/MainLayout";
import MainPage from "../components/MainPage/MainPage";

function Home() {
  return <MainPage />;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
