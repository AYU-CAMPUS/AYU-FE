import Table from "@mui/material/Table";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import * as Styled from "./TableContainer.style";
import * as S from "./MyPageInfo.style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";
import { apiInstance } from "../../../../pages/api/setting";

interface IPostsProps {
  downloadablePages: number;
  downloadableInfos: [
    {
      exchangeDate: string;
      title: string;
      requesterBoardId: number;
      writer: string;
      category: string;
    }
  ];
}

export default function DownloadData() {
  const title = "다운로드 가능한 자료";
  const description = "신청이 수락된 자료들을 볼 수 있습니다.";

  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<IPostsProps>();
  const [total, setTotal] = useState<number>(1);
  const [downloadData, setDownloadData] = useState<string>();
  const numPages = Math.ceil(total / 2);

  const userDownloadDataListAPI = async () => {
    const result = await apiInstance.get(
      `/user/downloadable?page=${currentPage}`
    );
    setPosts(result.data);
    setTotal(result.data.downloadablePages);
  };

  const userDownloadDataAPI = async (requesterBoardId: number) => {
    const result = await apiInstance.get(`/user/download/${requesterBoardId}`, {
      responseType: "blob",
    });
    setDownloadData(result.data);
  };

  useEffect(() => {
    if (downloadData) {
      const url = URL.createObjectURL(new Blob([downloadData]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${posts?.downloadableInfos[0].title}.txt`);
      link.setAttribute("id", "testLink");
      document.body.appendChild(link);
      link.click();
    }
    return () => {
      const link = document.querySelector("#testLink");
      link && link.remove();
    };
  }, [downloadData]);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleDownload = async (requesterBoardId: number) => {
    userDownloadDataAPI(requesterBoardId);
  };

  useEffect(() => {
    userDownloadDataListAPI();
  }, [currentPage]);

  return (
    <S.MyPageInfo>
      <TitleDescription title={title} description={description} />
      <S.BoundaryLine />

      <Styled.TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="registrationDate">
                교환완료
              </TableCell>
              <TableCell align="center" className="registrationDate">
                카테고리
              </TableCell>
              <TableCell align="center" className="subject">
                자료명
              </TableCell>
              <TableCell align="center" className="writer">
                작성자
              </TableCell>
              <TableCell align="center" className="download">
                다운로드
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts?.downloadableInfos.length ? (
              posts?.downloadableInfos.map(data => (
                <TableRow key={data.requesterBoardId}>
                  <TableCell align="center" className="exchangeComplete">
                    {data.exchangeDate}
                  </TableCell>
                  <TableCell align="center" className="subjectData">
                    {data.category}
                  </TableCell>

                  <Link href={`/article/${data.requesterBoardId}`}>
                    <TableCell align="center" className="dataNameData">
                      {data.title}
                    </TableCell>
                  </Link>

                  <TableCell align="center" className="writerData">
                    {data.writer}
                  </TableCell>
                  <TableCell align="center">
                    <button
                      type="button"
                      className="downloadBtn"
                      onClick={() => {
                        handleDownload(data.requesterBoardId);
                      }}
                    >
                      다운받기
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell align="center" colSpan={5}>
                <p className="exchangeStatus">
                  다운로드 가능한 자료가 없습니다.
                </p>
              </TableCell>
            )}
          </TableBody>
        </Table>
      </Styled.TableContainer>

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
        renderItem={item => <PaginationItem {...item} sx={{ fontSize: 12 }} />}
      />
    </S.MyPageInfo>
  );
}
