import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import { useRouter } from "next/router";
import { apiInstance } from "../../../../pages/api/setting";
import * as Styled from "./TableContainer.style";
import * as S from "./MyPageInfo.style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

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

  console.log(posts);

  const numPages = Math.ceil(total / 2);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    userPostDataAPI();
  }, [currentPage]);

  const router = useRouter();
  const handleEditRequest = (boardId: number) => {
    router.push(`/materials/edit/${boardId}`);
  };

  return (
    <S.MyPageInfo>
      <TitleDescription title={title} description={description} />
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
              <TableCell align="center" className="edit">
                수정
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts?.myDataInfos.map(data => (
              <TableRow key={data.boardId}>
                <TableCell align="center" className="registrationDateData">
                  {data.createdDate}
                </TableCell>
                <TableCell align="center" className="subjectData">
                  {data.category}
                  {data.boardId}
                </TableCell>

                <Link href={`/article/${data.boardId}`}>
                  <TableCell align="center" className="dataNameData">
                    {data.title}dd
                  </TableCell>
                </Link>

                <TableCell align="center">
                  <Image
                    src="/images/EditBtn.png"
                    width="20px"
                    height="20px"
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => handleEditRequest(data.boardId)}
                    onClick={() => handleEditRequest(data.boardId)}
                  />
                </TableCell>
              </TableRow>
            ))}
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
