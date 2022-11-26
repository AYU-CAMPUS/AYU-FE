import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./RequestList.style";
import SearchSection from "../SearchSection/SearchSection";

export default function RequestList() {
  const rows = [
    {
      registrationDate: "22.10.12",
      writer: "JASOM1234",
      title: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1",
      id: 0,
      classification: "학과별  전공자료 > 인문대학> 영미언어문화> 중간고사1",
    },
    {
      registrationDate: "22.10.12",
      writer: "JASOM1234",
      title: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2",
      id: 1,
      classification: "학과별  전공자료 > 인문대학> 영미언어문화> 중간고사2",
    },
    {
      registrationDate: "22.10.12",
      writer: "JASOM1234",
      title: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3",
      classification: "학과별  전공자료 > 인문대학> 영미언어문화> 중간고사",
      id: 2,
    },
    {
      registrationDate: "22.10.12",
      writer: "JASOM1234",
      title: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원4",
      classification: "학과별  전공자료 > 인문대학> 영미언어문화> 중간고사",

      id: 3,
    },
  ];

  return (
    <>
      <SearchSection />
      <Styled.RequestListTable>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">분류</TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center">작성자</TableCell>
              <TableCell align="center">작성일</TableCell>
              <TableCell align="center">수락여부</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.classification}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.writer}</TableCell>
                <TableCell align="center">{row.registrationDate}</TableCell>
                <TableCell align="center">
                  <Styled.AcceptanceBtn>수락</Styled.AcceptanceBtn>
                  <Styled.RefuseBtn>거절</Styled.RefuseBtn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Styled.RequestListTable>
    </>
  );
}
