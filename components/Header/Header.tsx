import Image from "next/image";
import Link from "next/link";
import * as Styled from "./Header.style";
import Logo from "../../public/images/ayu-campus-logo.svg";
import Alarm from "../../public/images/alarm.svg";
import exchangeAlarm from "../../public/images/exchangeAlarm.svg";

function Header() {
  const isLogin = true;
  return (
    <>
      <Styled.HeadWrapper>
        <Styled.Head>
          <Link href="/">
            <Image src={Logo} />
          </Link>
          {isLogin ? (
            <div>
              <Link href="/mypage">마이페이지</Link>
              <Link href="/register">자료등록</Link>
              <Image src={exchangeAlarm} width="37px" height="37px" />
              <Image src={Alarm} width="37px" height="37px" />
            </div>
          ) : (
            <div>
              <Link href="/signup">회원가입</Link>
              <Link href="/login">로그인</Link>
              <Image src={Alarm} width="37px" height="37px" />
            </div>
          )}
        </Styled.Head>
      </Styled.HeadWrapper>
      <Styled.BoundaryLine />
    </>
  );
}

export default Header;
