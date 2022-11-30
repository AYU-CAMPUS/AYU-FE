import { useState } from "react";
import Image from "next/image";
import * as Styled from "./Detail.style";
import thumbnail from "../../public/images/thumbnail.png";
import Button from "../Button/Button";
import Input from "../Input/Input";

import ProfileImage from "../../public/images/ProfileImage.png";
import Portal from "../Modal/Portal/Portal";
import ExchangeModal from "../Modal/ExchangeModal";

export default function Detail() {
  const ArticleInfoTitle = [
    "등록일",
    "학년",
    "페이지",
    "카테고리",
    "교수명",
    "파일형태",
    "작성자가 원하는 자료",
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = () => setModalIsOpen(false);

  return (
    <Styled.ArticleDetailWrapper>
      <Styled.Article>
        <Image src={thumbnail} width="632" height="743" />
        <Styled.ArticleSection>
          <Styled.ArticleTitle>인간관계론 </Styled.ArticleTitle>
          <Styled.ArticleInfoList>
            {ArticleInfoTitle.map(title => {
              return (
                <Styled.ArticleInfoWrapper key={title}>
                  <Styled.ArticleInfoTitle>{title}</Styled.ArticleInfoTitle>
                  <Styled.ArticleInfoContent>
                    멘토링 모집
                  </Styled.ArticleInfoContent>
                </Styled.ArticleInfoWrapper>
              );
            })}
          </Styled.ArticleInfoList>
          <Button
            width="26.6rem"
            height="6.3rem"
            margin="4.5rem 0 0 33.3rem"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            교환신청
          </Button>
        </Styled.ArticleSection>
      </Styled.Article>
      <Styled.ArticleDetailInfo>
        <Styled.ArticleDetailTitle>인간관계론 </Styled.ArticleDetailTitle>
        <p>
          I. 서 론 대인관계는 지속적인 접촉이 이어지는 과정인 것이다. 관계는
          역동적인 것으로, 지속적으로 변화하고 발전해 가는 과정인 것이다. 관계는
          신뢰, 자기개방, 친밀감의 수준을 달리하며 변화과정을 거친다. 일단 어떤
          일이 행해지면 그것을 무효화할 수 없는 것이다. 예를 들어 우리가 어떤
          관계 속에 있는 파트너와 어떤 일로 크게 싸운 일이 있었다면 그것을
          용서받는다 해도 그 사건은 어떤 형태로든 두 사람의 관계에 영향을 미치게
          되는 것이다.갈등은 두 사람, 혹은 집단 간의 차이와 서로의 목표나 욕구가
          무엇인지 알 수 있게 해주고 이를 통해 관계 속에서 해결해야 할 부분이
          무엇인지 알 수 있는 기회가 된다. 대인갈등은 잘못 해결하면 멀어지는
          관계로 돌아서는 계기가 되고 극단적인 경우 결별의 원인이 되기도 한다.
          교사로서 경험하게 되는 대인 갈등 사례와 유사한 조사 결과를 소개하면,
          한국보육진흥원의 설문조사 결과가 있다. 어린이집에서의 마찰‧갈등 경험
          여부를 묻는 질문에 응답자의 68.3%가 마찰‧ 갈등 경험이 있다고 응답했다.
          그중 학부모와의 마찰 및 이 응답자의 44.0%로 가장 많았으며, 그 다음이
          동료교사와의 마찰 및 38.7%, 원장과의 마찰 및 26.0% 순으로 나타났다.
          사람은 갈등에 직면하면 이를 회피하거나 부인하려고 하고 또 어떤 사람은
          무조건 양보하고 타협을 하려고 한다. 그런가 하면 이것을 이겨야할
          싸움으로 보고 상대방을 이기기 위해 싸움으로 몰고 가는 사람도 있다.
          갈등을 회피하거나 부인하는 태도는 서로의 문제를 덮어두어 해결의 시점을
          놓칠 수도 있지만 반대로 갈등의 충돌을 지연시켜 해결에 도움이 되는
          시점을 발견하는 데 도움이 되기도 한다. 이 레포트는 교사로서 경험하게
          되는 대인 갈등의 예시를 읽고, 해결의 과정을 제시하였다.
        </p>
      </Styled.ArticleDetailInfo>
      <Styled.CommentWrapper>
        <Styled.CommentTitle>댓글</Styled.CommentTitle>

        <Styled.CommentRegister>
          <Image src={ProfileImage} width="44" height="44" />
          <Input width="85.8rem" padding="1rem 1.5rem" />
          <Button width="10.2rem" height="4.3rem">
            등록
          </Button>
        </Styled.CommentRegister>

        <Styled.CommentSection>
          <Image src={ProfileImage} width="44" height="44" />
          <Styled.CommentInfo>
            <Styled.Comment>
              <Styled.Writer>jason97</Styled.Writer>
              <Styled.CommentContent>
                이 자료에 대해 궁금하신 점이 있다면 댓글 주세요.
              </Styled.CommentContent>
            </Styled.Comment>

            <Styled.CommentOption>
              <Styled.CommentHour>21시간</Styled.CommentHour>
              <Styled.CommentReply as="button">답글쓰기</Styled.CommentReply>
              <Styled.CommentReport as="button">댓글신고</Styled.CommentReport>
            </Styled.CommentOption>
          </Styled.CommentInfo>
        </Styled.CommentSection>

        <Styled.CommentSection>
          <Image src={ProfileImage} width="44" height="44" />
          <Styled.CommentInfo>
            <Styled.Comment>
              <Styled.Writer>jason97</Styled.Writer>
              <Styled.CommentContent>
                이 자료에 대해 궁금하신 점이 있다면 댓글 주세요.
              </Styled.CommentContent>
            </Styled.Comment>

            <Styled.CommentOption>
              <Styled.CommentHour>21시간</Styled.CommentHour>
              <Styled.CommentReply as="button">답글쓰기</Styled.CommentReply>
              <Styled.CommentReport as="button">댓글신고</Styled.CommentReport>
            </Styled.CommentOption>
          </Styled.CommentInfo>
        </Styled.CommentSection>
      </Styled.CommentWrapper>
      {modalIsOpen && (
        <Portal>
          <ExchangeModal handleModalClose={handleModalClose} />
        </Portal>
      )}
    </Styled.ArticleDetailWrapper>
  );
}
