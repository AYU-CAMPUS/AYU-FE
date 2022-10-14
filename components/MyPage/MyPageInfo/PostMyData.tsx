import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

function createData(
  registrationDate: string,
  subject: string,
  dataName: string,
  edit: any
) {
  return { registrationDate, subject, dataName, edit };
}

const rows = [
  createData(
    "2022.09.22",
    "특수교육학개론",
    " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1",
    <Image src="/images/EditBtn.png" width="20px" height="20px" />
  ),
  createData(
    "2022.09.23",
    "교육심리학",
    " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2 ",
    <Image src="/images/EditBtn.png" width="20px" height="20px" />
  ),
  createData(
    "2022.09.24",
    "특수교육학개론",
    " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3 ",
    <Image src="/images/EditBtn.png" width="20px" height="20px" />
  ),
];

export default function PostMyData() {
  const title = "내가 올린 자료";
  const description = "회원님이 등록한 자료를 볼 수 있습니다.";

  return (
    <Styled.MyPageInfo>
      <TitleDescription title={title} description={description} />
      <Styled.BoundaryLine />
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
                <TableCell align="center">{row.edit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Styled.TableContainer>
    </Styled.MyPageInfo>
  );
}
