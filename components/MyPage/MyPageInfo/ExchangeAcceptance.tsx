import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

function createData(date: string, applicant: string, dataName: string) {
  return { applicant, date, dataName };
}

const rows = [
  createData(
    "22.10.12",
    "이무성",
    " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1"
  ),
  createData(
    "22.10.13",
    "이무성2",
    " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2"
  ),
  createData(
    "22.10.14",
    "이무성3",
    " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3"
  ),
];

export default function ExchangeAcceptance() {
  const dataStatus = false;
  const title = "교환신청 수락";
  const description = "교환신청 수락여부를  선택할 수 있어요.";

  return (
    <Styled.MyPageInfo>
      <TitleDescription title={title} description={description} />
      <Styled.BoundaryLine />
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
            {dataStatus ? (
              rows.map(row => (
                <TableRow key={row.date}>
                  <TableCell align="center" className="dateData">
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className="applicantData">
                    {row.applicant}
                  </TableCell>
                  <TableCell align="center" className="dataNameData">
                    {row.dataName}
                  </TableCell>
                  <TableCell align="center">
                    <button type="button" className="acceptBtn">
                      수락
                    </button>
                    <button type="button" className="refuseBtn">
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
    </Styled.MyPageInfo>
  );
}
