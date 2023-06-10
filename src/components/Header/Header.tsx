import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import * as Styled from "./Header.style";
import { apiInstance } from "../../api/config";

function Header() {
  const [nickName, setNickName] = useState<string | null>("");
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_APP_BASE_URL;

  const loginAPI = async () => {
    const result = await apiInstance.get("/user/notification");
    localStorage.setItem("nickName", result.data.nickName);
    setNickName(localStorage.getItem("nickName"));
    return result.data.nickName;
  };

  useEffect(() => {
    loginAPI();
  }, []);

  const { data } = useQuery(["login"], loginAPI);
  console.log(data);

  const logoutAPI = async () => {
    await apiInstance.get("/user/logout");
    localStorage.clear();
    window.location.reload();
    router.push("/");
  };

  const handleLogOutClick = () => {
    logoutAPI();
  };

  return (
    <>
      <Styled.HeadWrapper>
        <Styled.Head>
          <Link href="/">
            <Image
              alt="ayu campus logo"
              src="/images/ayu-campus-logo.svg"
              width="212px"
              height="43px"
            />
          </Link>
          {nickName ? (
            <div>
              <Link href="/mypage">마이페이지</Link>
              <Link href="/materials/register">자료등록</Link>
              <button onClick={handleLogOutClick} type="button">
                로그아웃
              </button>
            </div>
          ) : (
            <div>
              <Link href={`${url}/oauth2/authorization/google`}>
                <button type="button">로그인</button>
              </Link>
            </div>
          )}
        </Styled.Head>
      </Styled.HeadWrapper>
      <Styled.BoundaryLine />
    </>
  );
}

export default Header;
