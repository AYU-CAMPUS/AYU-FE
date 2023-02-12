import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Table from "@mui/material/Table";
import { Pagination, PaginationItem } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./TableContainer.style";
import * as S from "./MyPageInfo.style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";
import { apiInstance } from "../../../pages/api/setting";

interface IPostsProps {
  exchangePages: number;
  exchangeInfos: [
    {
      exchangeId: number;
      applicationDate: string;
      requesterNickName: string;
      requesterId: string;
      title: string;
      requesterBoardId: number;
      boardId: number;
    }
  ];
}

export default function ExchangeAcceptance() {
  const title = "교환신청 수락";
  const description = "교환신청 수락여부를  선택할 수 있어요.";

  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<IPostsProps>();
  const [total, setTotal] = useState<number>(1);

  const userPostDataAPI = async () => {
    const result = await apiInstance.get(`/user/exchange?page=${currentPage}`);
    setPosts(result.data);
    setTotal(result.data.exchangePages);
  };

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    userPostDataAPI();
  }, [currentPage]);

  const acceptAPI = async (
    exchangeId: number,
    requesterId: string,
    boardId: number,
    requesterBoardId: number
  ) => {
    const result = await apiInstance.post("/user/exchange", {
      exchangeId,
      requesterId,
      boardId,
      requesterBoardId,
    });
    if (result.status === 200) {
      window.location.reload();
    }
  };

  const refusalAPI = async (
    exchangeId: number,
    requesterId: string,
    boardId: number,
    requesterBoardId: number
  ) => {
    const result = await apiInstance.delete("/user/exchange", {
      data: {
        exchangeId,
        requesterId,
        boardId,
        requesterBoardId,
      },
    });
    if (result.status === 200) {
      window.location.reload();
    }
  };

  const handleClickAccept = (
    exchangeId: number,
    requesterId: string,
    boardId: number,
    requesterBoardId: number
  ) => {
    acceptAPI(exchangeId, requesterId, boardId, requesterBoardId);
  };

  const handleClickRefuse = (
    exchangeId: number,
    requesterId: string,
    boardId: number,
    requesterBoardId: number
  ) => {
    refusalAPI(exchangeId, requesterId, boardId, requesterBoardId);
  };

  return (
    <S.MyPageInfo>
      <TitleDescription title={title} description={description} />
      <S.BoundaryLine />

      <Styled.TableContainer>
        <Table>
          <TableHead className="tableRow">
            <TableRow>
              <TableCell align="center" className="date">
                날짜
              </TableCell>
              <TableCell align="center" className="applicant">
                신청자
              </TableCell>
              <TableCell align="center" className="dataName">
                자료명
              </TableCell>
              <TableCell align="center" className="acceptanceStatus">
                수락 여부
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts?.exchangeInfos.length ? (
              posts?.exchangeInfos.map(data => (
                <TableRow key={data.boardId}>
                  <TableCell align="center" className="dateData">
                    {data.applicationDate}
                  </TableCell>
                  <TableCell align="center" className="applicantData">
                    {data.requesterNickName}
                  </TableCell>

                  <Link href={`/article/${data.boardId}`}>
                    <TableCell align="center" className="dataNameData">
                      {data.title}
                    </TableCell>
                  </Link>

                  <TableCell align="center">
                    <button
                      type="button"
                      className="acceptBtn"
                      onClick={() => {
                        handleClickAccept(
                          data.exchangeId,
                          data.requesterId,
                          data.boardId,
                          data.requesterBoardId
                        );
                      }}
                    >
                      수락
                    </button>
                    <button
                      type="button"
                      className="refuseBtn"
                      onClick={() => {
                        handleClickRefuse(
                          data.exchangeId,
                          data.requesterId,
                          data.boardId,
                          data.requesterBoardId
                        );
                      }}
                    >
                      거절
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell align="center" colSpan={4}>
                <p className="exchangeStatus"> 교환신청이 없습니다.</p>
              </TableCell>
            )}
          </TableBody>
        </Table>
      </Styled.TableContainer>

      <Pagination
        count={total}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        size="large"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
        }}
        renderItem={item => <PaginationItem {...item} sx={{ fontSize: 12 }} />}
      />
    </S.MyPageInfo>
  );
}
