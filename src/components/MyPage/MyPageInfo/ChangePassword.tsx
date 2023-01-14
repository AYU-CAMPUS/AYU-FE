import { useForm, SubmitHandler } from "react-hook-form";
import * as Styled from "./MyPageInfo.style";
import { IUserFormInput } from "./types";
import TitleDescription from "../MyPageNavTitle/TitleDescription";
import Button from "../../Button/Button";

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

      <Styled.FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.ChangePassword>
            <Styled.ChangeLabel>변경 비밀번호</Styled.ChangeLabel>
            <input
              placeholder="영어,숫자 조합 최소 8자 이상 입력해주세요"
              type="password"
            />
          </Styled.ChangePassword>

          <Styled.PasswordConfirm>
            <Styled.ConfirmLabel>비밀번호 확인</Styled.ConfirmLabel>
            <input type="password" />
          </Styled.PasswordConfirm>

          <Button margin="6.3rem 0 0 12.7rem">완료</Button>
        </form>
      </Styled.FormWrapper>
    </Styled.MyPageInfo>
  );
}

export default ChangePassWord;
