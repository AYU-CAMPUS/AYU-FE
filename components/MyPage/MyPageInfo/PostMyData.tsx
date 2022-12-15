import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import { apiInstance } from "../../../pages/api/setting";
import * as Styled from "./TableContainer.style";
import * as S from "./MyPageInfo.style";

import TitleDescription from "../MyPageNavTitle/TitleDescription";

const rows = [
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1",
    id: 0,
  },
  {
    registrationDate: "22.10.13",
    subject: "특수교육학개론2",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2",
    id: 1,
  },
  {
    registrationDate: "22.10.14",
    subject: "특수교육학개론3",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3",
    id: 2,
  },
];

export default function PostMyData() {
  const title = "내가 올린 자료";
  const description = "회원님이 등록한 자료를 볼 수 있습니다.";

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const token = "a";

  const UserDataAPI = async () => {
    await apiInstance.get(`/user/data?page=${currentPage}&?token=${token}`);
  };

  useEffect(() => {
    UserDataAPI();
  }, []);

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
                과목
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
            {rows.map(row => (
              <TableRow key={row.registrationDate}>
                <TableCell align="center" className="registrationDateData">
                  {row.registrationDate}
                </TableCell>
                <TableCell align="center" className="subjectData">
                  {row.subject}
                </TableCell>
                <TableCell align="center" className="dataNameData">
                  {row.dataName}
                </TableCell>
                <TableCell align="center">
                  <Image src="/images/EditBtn.png" width="20px" height="20px" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Styled.TableContainer>

      <Pagination
        count={10}
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
