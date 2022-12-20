import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

function LoginPage() {
  return <div>dd</div>;
}

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default LoginPage;
