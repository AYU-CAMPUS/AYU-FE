import Image from "next/image";
import { useRouter } from "next/router";
import { useState, FormEvent } from "react";
import Button from "../Button/Button";
import * as Styled from "./ExchangeModal.style";
import cancel from "../../public/images/cancel.svg";

type ModalEventProps = {
  handleModalClose: () => void;
};

function ExchangeModal({ handleModalClose }: ModalEventProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<number>();

  const reasons = [
    {
      id: 0,
      reason: "인간관계론 ",
    },
    {
      id: 1,
      reason: "인간관계론 ",
    },
    {
      id: 2,
      reason: "인간관계론 ",
    },
    {
      id: 3,
      reason: "인간관계론 ",
    },
    {
      id: 4,
      reason: "인간관계론",
    },
    {
      id: 4,
      reason: "인간관계론",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/");
    console.log(selected);
  };

  return (
    <Styled.Background>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.ModalTitle>
          <div />
          <h2>교환할 내 자료</h2>
          <button type="button" onClick={handleModalClose}>
            <Image src={cancel} />
          </button>
        </Styled.ModalTitle>

        <Styled.BoundaryLine />

        <Styled.ReasonSelection>
          <span>
            *교환이 완료된 후 3일 이내에 다운로드 받는 것을 권장드려요.
          </span>

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

          <Button width="60rem" height="7rem" margin="3rem 0 4.4rem 0">
            교환 신청
          </Button>
        </Styled.ReasonSelection>
      </Styled.Form>
    </Styled.Background>
  );
}

export default ExchangeModal;
