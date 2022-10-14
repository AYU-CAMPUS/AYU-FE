import Image from "next/image";
import { useRouter } from "next/router";
import * as Styled from "./style";

export default function Profile() {
  const nickName = "닉네임";
  const router = useRouter();

  return (
    <Styled.MyProfile>
      <div className="profileDescription">
        <Image src="/images/Profile.png" width="80px" height="80px" />
        <p>{nickName}님</p>
      </div>
      <div className="registerBtn">
        <button type="button" onClick={() => router.push("/")}>
          프로필 사진 변경
        </button>
        <button type="button" onClick={() => router.push("/")}>
          자료등록
        </button>
      </div>
    </Styled.MyProfile>
  );
}
