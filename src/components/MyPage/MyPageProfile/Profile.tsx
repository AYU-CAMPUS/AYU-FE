import Image from "next/image";
import { useRouter } from "next/router";
import * as Styled from "./style";

interface IProfileProps {
  nickName: string | undefined;
}

export default function Profile({ nickName }: IProfileProps) {
  const router = useRouter();

  return (
    <Styled.MyProfile>
      <Styled.ProfileDescription>
        <Image src="/images/Profile.png" width="80px" height="80px" />
        <p>{nickName}님</p>
      </Styled.ProfileDescription>

      {/* <Styled.ProfileBtn type="button" onClick={() => router.push("/")}>
        프로필 사진 변경
      </Styled.ProfileBtn> */}
      <Styled.RegisterBtn type="button" onClick={() => router.push("/")}>
        자료등록
      </Styled.RegisterBtn>
    </Styled.MyProfile>
  );
}
