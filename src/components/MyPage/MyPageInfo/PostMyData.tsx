import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import * as Styled from "./TableContainer.style";
import * as S from "./MyPageInfo.style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";
import { apiInstance } from "../../../api/config";

interface IPostsProps {
  dataPages: number;
  myDataInfos: [
    {
      createdDate: string;
      title: string;
      boardId: number;
      category: string;
    }
  ];
}

export default function PostMyData() {
  const title = "내가 올린 자료";
  const description = "회원님이 등록한 자료를 볼 수 있습니다.";

  const [currentPage, setCurrentPage] = useState(1);

  const [posts, setPosts] = useState<IPostsProps>();
  const [total, setTotal] = useState<number>(1);

  const userPostDataAPI = async () => {
    const result = await apiInstance.get(`/user/data?page=${currentPage}`);
    setPosts(result.data);
    setTotal(result.data.dataPages);
  };

  const numPages = Math.ceil(total / 2);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    userPostDataAPI();
  }, [currentPage]);

  return (
    <S.MyPageInfo>
      <TitleDescription title={title} description={description} />{" "}
      <S.GuideLine>*자료명 클릭시 게시물 페이지로 넘어갑니다</S.GuideLine>
      <S.BoundaryLine />
      <Styled.TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="registrationDate">
                등록일
              </TableCell>
              <TableCell align="center" className="subject">
                카테고리
              </TableCell>
              <TableCell align="center" className="dataName">
                자료명
              </TableCell>
              {/* <TableCell align="center" className="edit">
                수정
              </TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {posts?.myDataInfos.length ? (
              posts?.myDataInfos.map(data => (
                <TableRow key={data.boardId}>
                  <TableCell align="center" className="registrationDateData">
                    {data.createdDate}
                  </TableCell>
                  <TableCell align="center" className="subjectData">
                    {data.category}
                  </TableCell>

                  <Link href={`/article/${data.boardId}`}>
                    <TableCell align="center" className="dataNameData">
                      {data.title}
                    </TableCell>
                  </Link>

                  {/* <TableCell align="center">
                    <Image
                      src="/images/EditBtn.png"
                      width="20px"
                      height="20px"
                    />
                  </TableCell> */}
                </TableRow>
              ))
            ) : (
              <TableCell align="center" colSpan={5}>
                <p className="exchangeStatus">
                  내가 올린 자료가 없습니다. <br />
                  자료 업로드는 3일정도 소요됩니다.
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
