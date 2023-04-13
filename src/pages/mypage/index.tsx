import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MyPageComponent from "../../components/MyPage/MyPageComponent";

function MyPage() {
  return <MyPageComponent />;
}

MyPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPage;
