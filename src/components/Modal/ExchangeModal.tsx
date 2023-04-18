import Image from "next/image";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { Pagination, PaginationItem } from "@mui/material";
import Button from "../Button/Button";
import * as Styled from "./ExchangeModal.style";
import cancel from "../../../public/images/cancel.svg";
import { apiInstance } from "../../api/config";

interface ModalProps {
  handleModalClose: () => void;
  detail: string | string[] | undefined;
}

interface IPostsProps {
  exchangePages: number;
  myDataInfos: [
    {
      title: string;
      boardId: number;
    }
  ];
}

function ExchangeModal({ handleModalClose, detail }: ModalProps) {
  const [selected, setSelected] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const [posts, setPosts] = useState<IPostsProps>();
  const [total, setTotal] = useState<number>(1);

  const boardId = Number(detail);

  const exchangeMyDataAPI = async () => {
    const result = await apiInstance.get(`/exchange?page=${currentPage}`);
    setPosts(result.data);
    setTotal(result.data.exchangePages);
  };

  const exchangeRequestAPI = async (requesterBoardId: number | undefined) => {
    const result = await apiInstance.post("/exchange", {
      boardId,
      requesterBoardId,
    });
    if (result.status === 200) {
      router.push("/mypage");
    }
  };

  const numPages = Math.ceil(total / 2);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    exchangeMyDataAPI();
  }, [currentPage]);

  const handleSubmit = (
    requesterBoardId: number | undefined,
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    exchangeRequestAPI(requesterBoardId);
    handleModalClose();
  };

  return (
    <Styled.Background>
      <Styled.Form
        onSubmit={e => {
          handleSubmit(selected, e);
        }}
      >
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
            {posts?.myDataInfos.map(data => {
              return (
                <Styled.RadioWrapper key={data.boardId}>
                  <input
                    type="radio"
                    name="data"
                    onClick={() => {
                      setSelected(data.boardId);
                    }}
                  />
                  <span>{data.title}</span>
                </Styled.RadioWrapper>
              );
            })}
          </Styled.RadioSection>

          <Pagination
            count={numPages}
            page={currentPage}
            onChange={onPageChange}
            color="primary"
            size="large"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "15px 0",
            }}
            renderItem={item => (
              <PaginationItem {...item} sx={{ fontSize: 15 }} />
            )}
          />

          <Button width="60rem" height="7rem" margin="3rem 0 4.4rem 0">
            교환 신청
          </Button>
        </Styled.ReasonSelection>
      </Styled.Form>
    </Styled.Background>
  );
}

export default ExchangeModal;
