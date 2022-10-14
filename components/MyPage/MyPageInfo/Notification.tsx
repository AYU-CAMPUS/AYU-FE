import Image from "next/image";
import * as Styled from "./style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

export default function Notification() {
  const dataStatus = false;
  const title = "알림";
  const description = "각종 알림을 볼 수 있어요.";
  return (
    <Styled.MyPageInfo>
      <TitleDescription title={title} description={description} />{" "}
      <Styled.BoundaryLine />
      {dataStatus ? (
        <>
          <Styled.NotificationDate>10월 12일</Styled.NotificationDate>
          <Styled.NotificationContent>
            <Image src="/images/ProfileImage.png" width="50px" height="50px" />
            <p className="content">
              Jason1243님이 교환을 <span className="contentEmphasis">거절</span>
              하였습니다.
            </p>
          </Styled.NotificationContent>
          <Styled.NotificationContent>
            <Image src="/images/ProfileImage.png" width="50px" height="50px" />
            <p className="content">
              Jason1243님이 교환을 <span className="contentEmphasis">거절</span>
              하였습니다.
            </p>
          </Styled.NotificationContent>
          <Styled.NotificationDate>10월 03일</Styled.NotificationDate>
          <Styled.NotificationContent>
            <Image src="/images/ProfileImage.png" width="50px" height="50px" />
            <p className="content">
              Jason1243님이 회원님의 자료에 댓글을 달았습니다.
            </p>
          </Styled.NotificationContent>
          <Styled.NotificationContent>
            <Image src="/images/ProfileImage.png" width="50px" height="50px" />
            <p className="content">
              Jason1243님이 회원님의 자료에 댓글을 달았습니다.
            </p>
          </Styled.NotificationContent>
        </>
      ) : (
        <Styled.NotificationNoContent>
          알림이 없습니다.
        </Styled.NotificationNoContent>
      )}
    </Styled.MyPageInfo>
  );
}
