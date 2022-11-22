import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button/Button";
import * as Styled from "./WithdrawlModal.style";

type ModalEventProps = {
  handleModalClose: () => void;
};

function WithdrawlModal({ handleModalClose }: ModalEventProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<number>();
  const [inputs, setInputs] = useState("");

  const reasons = [
    {
      id: 0,
      reason: "탈퇴 후 재가입 하기 위해서",
    },
    {
      id: 1,
      reason: "사이트 디자인이 별로여서",
    },
    {
      id: 2,
      reason: "사용하기에 불편해서",
    },
    {
      id: 3,
      reason: "더 이상 필요하다고 못 느껴서  ",
    },
    {
      id: 4,
      reason: "직접입력",
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <Styled.Background>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.ModalTitle>
          <div />
          <h2>회원탈퇴</h2>
          <button type="button" onClick={handleModalClose}>
            X
          </button>
        </Styled.ModalTitle>

        <Styled.BoundaryLine />

        <Styled.ReasonSelection>
          <p>사유선택</p>
          <span>*회원 탈퇴 시 모든 자료들과 댓글은 삭제됩니다.</span>

          <Styled.RadioSection>
            {reasons.map(reason => {
              return (
                <Styled.RadioWrapper key={reason.id}>
                  <input
                    type="radio"
                    name="reason"
                    onClick={() => {
                      setSelected(reason.id);
                    }}
                  />
                  <span>{reason.reason}</span>
                </Styled.RadioWrapper>
              );
            })}
          </Styled.RadioSection>

          {selected === 4 && (
            <Styled.Textarea
              placeholder="불편한 점이나 개선사항을 적어주세요!"
              onChange={handleChange}
              name="textarea"
              value={inputs}
            />
          )}

          <Button width="60rem" height="7rem" margin="3rem 0 4.4rem 0">
            탈퇴
          </Button>
        </Styled.ReasonSelection>
      </Styled.Form>
    </Styled.Background>
  );
}

export default WithdrawlModal;
