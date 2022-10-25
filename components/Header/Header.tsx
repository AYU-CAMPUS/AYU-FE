import Image from "next/image";
import { useRouter } from "next/router";
import * as Styled from "./Header.style";
import Logo from "../../public/images/ayu-campus-logo.svg";
import Alarm from "../../public/images/alarm.svg";
import exchangeAlarm from "../../public/images/exchangeAlarm.svg";

function Header() {
  const router = useRouter();
  const isLogin = true;
  return (
    <>
      <Styled.HeadWrapper>
        <Styled.Head>
          <Image src={Logo} />
          {isLogin ? (
            <div>
              <button
                type="button"
                onClick={() => {
                  router.push("/mypage");
                }}
              >
                마이페이지
              </button>
              <button
                type="button"
                onClick={() => {
                  router.push("/register");
                }}
              >
                자료등록
              </button>
              <Image src={exchangeAlarm} width="37px" height="37px" />
              <Image src={Alarm} width="37px" height="37px" />
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                회원가입
              </button>
              <button
                type="button"
                onClick={() => {
                  router.push("/login");
                }}
              >
                로그인
              </button>
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
