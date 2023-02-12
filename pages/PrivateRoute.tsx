import React from "react";
import { useRouter } from "next/router";

function WithAuth(Component: () => React.ReactElement) {
  const nickName = localStorage.getItem("nickName");
  const router = useRouter();

  if (!nickName) {
    router.push("https://accounts.google.com/");
  }
  if (nickName) {
    return <Component />;
  }
}

export default WithAuth;
