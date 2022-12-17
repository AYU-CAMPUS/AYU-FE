import React from "react";

import MainPage from "../components/MainPage/MainPage";
import MainLayout from "../components/Layout/MainLayout";

function Main() {
  return <MainPage />;
}

Main.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Main;
