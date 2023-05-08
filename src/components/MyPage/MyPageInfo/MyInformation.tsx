import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import * as Styled from "./MyPageInfo.style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";
import Button from "../../Button/Button";
import { apiInstance } from "../../../api/config";

export default function MyInformation() {
  const title = "내 정보";
  const description = "회원님의 정보를 한 눈에 볼 수 있어요";
  const refOne = useRef<HTMLInputElement>(null);
  const refTwo = useRef<HTMLInputElement>(null);
  const refThree = useRef<HTMLInputElement>(null);

  const [nickName, setNickName] = useState<string>("");

  const [nickNameMessage, setNickNameMessage] = useState<string>("");
  const [isNickName, setIsNickName] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [checkMsg, setCheckMsg] = useState();

  const handleCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const result = await apiInstance.get(
        `/user/existence-nickname?nickName=${nickName}`
      );
      setCheckMsg(result.data);
      setIsChecked(true);
    } catch {
      console.log("네트워크 에러");
    }
  };

  const handleChangeNickName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const nickNameRegex = /^[a-zA-Z\d가-힣]{1,8}$/gi;
      const nickNameCurrent = e.target.value;
      setNickName(nickNameCurrent);
      setIsChecked(false);

      if (!nickNameRegex.test(nickNameCurrent)) {
        setNickNameMessage("닉네임 형식이 틀렸어요! 다시 확인해주세요!");
        setIsNickName(false);
      } else {
        setNickNameMessage("올바른 닉네임 형식이에요 : )");
        setIsNickName(true);
      }
    },
    []
  );

  const ChangeInfoAPI = async () => {
    const desiredData = [refOne, refTwo, refThree].map(ref =>
      ref.current !== null ? ref.current.value : null
    );
    try {
      const result = await apiInstance.patch(`/user/info`, {
        nickName,
        desiredData,
      });
      if (result.status === 200) {
        window.location.reload();
      }
    } catch (err) {
      throw new Error("정보 변경에 실패했습니다.");
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ChangeInfoAPI();
    // window.location.reload();
  };

  return (
    <Styled.MyPageInfo>
      <TitleDescription title={title} description={description} />

      <Styled.BoundaryLine />

      <Styled.FormWrapper>
        <form onSubmit={onSubmit}>
          <Styled.NickName>
            <Styled.NickNameLabel>닉네임</Styled.NickNameLabel>
            <input
              placeholder="1~8 글자 닉네임을 입력해주세요"
              className="inputNickName"
              onChange={handleChangeNickName}
            />

            <Styled.DuplicateVerificationBtn
              disabled={!isNickName}
              onClick={handleCheck}
            >
              중복확인
            </Styled.DuplicateVerificationBtn>
          </Styled.NickName>
          {isChecked ? (
            checkMsg === true ? (
              <p className={`errorMessage ${!checkMsg ? "success" : "error"}`}>
                사용 가능한 닉네임입니다.
              </p>
            ) : (
              <p className={`errorMessage ${!checkMsg ? "success" : "error"}`}>
                중복되는 닉네임입니다.
              </p>
            )
          ) : (
            nickName.length > 0 && (
              <p className={`errorMessage ${isNickName ? "error" : "success"}`}>
                {nickNameMessage}
              </p>
            )
          )}

          <Styled.Data>
            <div>
              <Styled.DataLabel>원하는 자료</Styled.DataLabel>
              <input
                type="text"
                placeholder="1. 인간관계론 기말고사 자료"
                ref={refOne}
              />
            </div>
            <input
              type="text"
              placeholder="2. 컴퓨터개론 기말고사 자료"
              ref={refTwo}
            />
            <input
              type="text"
              placeholder="3. 기독교개론 기말고사 자료"
              ref={refThree}
            />
          </Styled.Data>

          <Button margin="4rem 0 12rem 9.7rem">저장</Button>
        </form>
      </Styled.FormWrapper>
    </Styled.MyPageInfo>
  );
}
