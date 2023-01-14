import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
// import { motion } from "framer-motion";
import * as Styled from "./Detail.style";
import thumbnail from "../../public/images/thumbnail.png";
import Button from "../Button/Button";

// import Input from "../Input/Input";

// import ProfileImage from "../../public/images/ProfileImage.png";
import Portal from "../Modal/Portal/Portal";
import ExchangeModal from "../Modal/ExchangeModal";
import { apiInstance } from "../../../pages/api/setting";

interface IPostsProps {
  content: string;
  title: string;
  writer: string;
  boardCategory: {
    category: string;
    departmentType: string;
    fileType: string;
    gradeType: string;
    subjectName: string;
    professorName: string;
  };
  views: number;
  numberOfFilePages: number;
  numberOfSuccessfulExchanges: number;
  createdDate: string;
  exchangeType: number;
  desiredData: [string];
}

export default function Detail() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = () => setModalIsOpen(false);

  const [posts, setPosts] = useState<IPostsProps>();

  const ArticleInfoTitle = [
    {
      name: "등록일",
      value: posts?.createdDate,
      id: 0,
    },
    {
      name: "학년",
      value: posts?.boardCategory.gradeType,
      id: 1,
    },
    {
      name: "페이지",
      value: posts?.numberOfFilePages,
      id: 2,
    },
    {
      name: "카테고리",
      value: posts?.boardCategory.category,
      id: 3,
    },
    {
      name: "교수명",
      value: posts?.boardCategory.professorName,
      id: 4,
    },
    {
      name: "파일형태",
      value: posts?.boardCategory.fileType,
      id: 5,
    },
    {
      name: "작성자가 원하는 자료",
      value: `${posts?.desiredData}자료`,
      id: 6,
    },
  ];

  const router = useRouter();
  const { detail } = router.query;

  const articleContentAPI = async (id: string | string[]) => {
    const result = await apiInstance.get(`/board/content/${id}`);
    setPosts(result.data);
  };

  const boardDeleteAPI = async () => {
    await apiInstance.delete("/board", {
      data: {
        boardId: detail,
      },
    });
  };

  const handleClickDelete = async () => {
    await Swal.fire({
      title:
        "<span style='font-size:18px; line-height: 23px'>자료 삭제 시 복구가 불가능하니<br> 유의해주세요.</span>",
      confirmButtonText:
        "<button style='font-size:18px; width:128px; height:45px; border: 1px solid #26409A; border-radius: 10px; color: #26409A;'>삭제</button>",
      cancelButtonText:
        "<button style='font-size:18px; width:128px; height:45px; border: 1px solid #26409A; border-radius: 10px; color: #26409A;'>취소</button>",
      showCancelButton: true,
      width: 380,
      heightAuto: true,
      color: "#000000",
      confirmButtonColor: "white",
      cancelButtonColor: "white",
      customClass: {
        popup: "swal2-show",
      },
    }).then(async result => {
      if (result.isConfirmed) {
        await boardDeleteAPI();
        Swal.fire({
          text: "삭제과 완료되었습니다.",
          icon: "success",
          confirmButtonText: "확인",
        });
        router.push("/mypage");
      }
    });
  };

  useEffect(() => {
    if (detail !== undefined) {
      articleContentAPI(detail);
    }
  }, [detail]);

  return (
    <Styled.ArticleDetailWrapper>
      <Styled.Article>
        <Image src={thumbnail} width="632" height="743" />

        <Styled.ArticleSection>
          <Styled.ArticleTitle>{posts?.title}</Styled.ArticleTitle>

          <Styled.ArticleInfoList>
            {ArticleInfoTitle.map(title => {
              return (
                <Styled.ArticleInfoWrapper key={title.id}>
                  <Styled.ArticleInfoTitle>
                    {title.name}
                  </Styled.ArticleInfoTitle>
                  <Styled.ArticleInfoContent>
                    {title.value}
                  </Styled.ArticleInfoContent>
                </Styled.ArticleInfoWrapper>
              );
            })}
          </Styled.ArticleInfoList>

          {posts?.exchangeType === 0 && (
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
          )}

          {posts?.exchangeType === -2 && (
            <Button
              width="26.6rem"
              height="6.3rem"
              margin="4.5rem 0 0 33.3rem"
              background="#FFFFFF"
              color="#26409A"
            >
              교환중
            </Button>
          )}

          {posts?.exchangeType === 1 && (
            <Button width="26.6rem" height="6.3rem" margin="4.5rem 0 0 33.3rem">
              교환완료
            </Button>
          )}

          {posts?.exchangeType === -1 && (
            <Styled.ButtonWrapper>
              <Button
                width="26.6rem"
                height="6.3rem"
                margin="4.5rem 0 0 4.7rem"
                background="#FFFFFF"
                color="#26409A"
                onClick={handleClickDelete}
              >
                자료 삭제
              </Button>
              <Button width="26.6rem" height="6.3rem" margin="4.5rem 0 0 0">
                자료 수정
              </Button>
            </Styled.ButtonWrapper>
          )}
        </Styled.ArticleSection>
      </Styled.Article>

      <Styled.ArticleDetailInfo>
        <Styled.ArticleDetailTitle>자료 상세정보</Styled.ArticleDetailTitle>
        <p>{posts?.content}</p>
      </Styled.ArticleDetailInfo>
      {/* <Styled.CommentWrapper>
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
      </Styled.CommentWrapper> */}
      {modalIsOpen && (
        <Portal>
          <ExchangeModal handleModalClose={handleModalClose} detail={detail} />
        </Portal>
      )}
    </Styled.ArticleDetailWrapper>
  );
}
