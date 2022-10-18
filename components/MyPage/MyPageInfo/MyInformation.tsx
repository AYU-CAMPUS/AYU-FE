import { useForm, SubmitHandler } from "react-hook-form";
import * as Styled from "./MyPageInfo.style";
import {
  FormErrorMessages,
  koreaChractersCheck,
} from "../../../utils/hookFormUtil";
import { IUserFormInput } from "./types";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

export default function MyInformation() {
  const title = "내 정보";
  const description = "회원님의 정보를 한 눈에 볼 수 있어요";
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data: IUserFormInput) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Styled.MyPageInfo>
      <TitleDescription title={title} description={description} />

      <Styled.BoundaryLine />

      <Styled.FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Name>
            <Styled.NameLabel>이름</Styled.NameLabel>
            <input
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 10,
                pattern: koreaChractersCheck,
              })}
              placeholder="이름을 입력해주세요"
              id="name"
              style={{ border: watch("name") && "1px solid #6600CC" }}
            />
          </Styled.Name>
          {errors?.name?.type === "pattern" && (
            <p className="errorMessage">{FormErrorMessages.NAME}</p>
          )}
          {errors?.name?.type === "required" && (
            <p className="errorMessage">{FormErrorMessages.NAME_REQUIRED}</p>
          )}
          {errors?.name?.type === "maxLength" && (
            <p className="errorMessage">{FormErrorMessages.MAX_LENGTH}</p>
          )}
          {errors?.name?.type === "minLength" && (
            <p className="errorMessage">{FormErrorMessages.MIN_LENGTH}</p>
          )}

          <Styled.NickName>
            <Styled.NickNameLabel>닉네임</Styled.NickNameLabel>
            <input
              {...register("nickName", {
                required: true,
                minLength: 3,
                maxLength: 10,
                pattern: koreaChractersCheck,
              })}
              placeholder="닉네임을 입력해주세요"
              className="inputNickName"
              style={{ border: watch("nickName") && "1px solid #6600CC" }}
            />
            <Styled.DuplicateVerificationBtn>
              중복확인
            </Styled.DuplicateVerificationBtn>
          </Styled.NickName>
          {errors?.nickName?.type === "pattern" && (
            <p className="errorMessage">{FormErrorMessages.NICKNAME}</p>
          )}
          {errors?.nickName?.type === "required" && (
            <p className="errorMessage">
              {FormErrorMessages.NICKNAME_REQUIRED}
            </p>
          )}
          {errors?.nickName?.type === "maxLength" && (
            <p className="errorMessage">{FormErrorMessages.MAX_LENGTH}</p>
          )}
          {errors?.nickName?.type === "minLength" && (
            <p className="errorMessage">{FormErrorMessages.MIN_LENGTH}</p>
          )}

          <Styled.Data>
            <Styled.DataLabel>원하는 자료</Styled.DataLabel>
            <input type="text" placeholder="총 3개까지 적어주세요" />
          </Styled.Data>

          <Styled.SaveBtn type="submit">저장</Styled.SaveBtn>

          <Styled.Withdrwal type="button">회원탈퇴</Styled.Withdrwal>
        </form>
      </Styled.FormWrapper>
    </Styled.MyPageInfo>
  );
}
