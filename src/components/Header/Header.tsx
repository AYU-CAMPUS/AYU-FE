import Image from "next/image";
import Link from "next/link";
import * as Styled from "./Header.style";

function Header() {
  const isLogin = false;
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
          {isLogin ? (
            <div>
              <Link href="/mypage">마이페이지</Link>
              <Link href="/register">자료등록</Link>
              <Image
                src="/images/exchangeAlarm.svg"
                width="37px"
                height="37px"
              />
              <Image src="/images/alarm.svg" width="37px" height="37px" />
            </div>
          ) : (
            <div>
              <Link href="/signup">회원가입</Link>
              <Link href="https://ayu-be.shop/oauth2/authorization/google ">
                <button type="button">Connect to google</button>
              </Link>
              <Image src="/images/alarm.svg" width="37px" height="37px" />
            </div>
          )}
        </Styled.Head>
      </Styled.HeadWrapper>
      <Styled.BoundaryLine />
    </>
  );
}

export default Header;
