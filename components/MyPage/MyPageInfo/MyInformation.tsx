import { useForm, SubmitHandler } from "react-hook-form";
import * as Styled from "./style";
import { FormErrorMessages } from "../../../utils/hookFormUtil";
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
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <label htmlFor="이름">이름</label>
            <input
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 10,
                pattern: /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi,
              })}
              placeholder="이름을 입력해주세요"
              id="name"
              style={{ border: watch("name") && "1px solid #6600CC" }}
            />
          </div>
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
          <div className="nickName">
            <label htmlFor="닉네임">닉네임</label>
            <input
              {...register("nickName", {
                required: true,
                minLength: 3,
                maxLength: 10,
                pattern: /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi,
              })}
              placeholder="닉네임을 입력해주세요"
              className="inputNickName"
              style={{ border: watch("nickName") && "1px solid #6600CC" }}
            />
            <button type="button" className="duplicateVerificationBtn">
              중복확인
            </button>
          </div>
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
          <div className="data">
            <label htmlFor="자료">원하는 자료</label>
            <input type="text" placeholder="총 3개까지 적어주세요" />
          </div>
          <button type="submit" className="saveBtn">
            저장
          </button>
          <button type="button" className="withdrwal">
            회원탈퇴
          </button>
        </form>
      </div>
    </Styled.MyPageInfo>
  );
}
