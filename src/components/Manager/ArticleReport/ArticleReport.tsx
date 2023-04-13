import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import * as Styled from "./ArticleReport.style";
import SearchSection from "../SearchSection/SearchSection";
import { TableData } from "./TableData";
import dateIcon from "../../../../public/images/date.svg";

export default function ArticleReport() {
  return (
    <>
      <SearchSection />
      <Styled.CommentReportTable>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">아이디</TableCell>
              <TableCell align="center">닉네임</TableCell>
              <TableCell align="center">게시글(링크)</TableCell>
              <TableCell align="center">사유</TableCell>
              <TableCell align="center">정지 기간</TableCell>
              <TableCell align="center">버튼</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {TableData.map(row => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.userId}</TableCell>
                <TableCell align="center">{row.nickName}</TableCell>
                <TableCell align="center">{row.article}</TableCell>
                <TableCell align="center">{row.reason}</TableCell>
                <TableCell align="center">
                  <Image src={dateIcon} />
                </TableCell>
                <TableCell align="center">
                  <Styled.ApplyBtn>적용</Styled.ApplyBtn>
                  <Styled.CancelBtn>취소</Styled.CancelBtn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Styled.CommentReportTable>
    </>
  );
}
