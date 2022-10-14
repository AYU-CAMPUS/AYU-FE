import { useForm, SubmitHandler } from "react-hook-form";
import * as Styled from "./style";
import { IUserFormInput } from "./types";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

function ChangePassWord() {
  const title = "비밀번호 변경";
  const description = "회원님의 비밀번호를 변경할 수 있습니다.";

  const { handleSubmit } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data: IUserFormInput) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Styled.MyPageInfo>
      <TitleDescription title={title} description={description} />
      <Styled.BoundaryLine />
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="changePassword">
            <label htmlFor="변경 비밀번호" className="changelabel">
              변경 비밀번호
            </label>
            <input
              placeholder="영어,숫자 조합 최소 8자 이상 입력해주세요"
              type="password"
            />
          </div>
          <div className="passwordConfirm">
            <label htmlFor="비밀번호 확인" className="confirmlabel">
              비밀번호 확인
            </label>
            <input type="password" />
          </div>
          <button type="submit" className="completeBtn">
            완료
          </button>
        </form>
      </div>
    </Styled.MyPageInfo>
  );
}

export default ChangePassWord;
