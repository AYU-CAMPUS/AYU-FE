import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./TableContainer.style";
import * as S from "./MyPageInfo.style";
import TitleDescription from "../MyPageNavTitle/TitleDescription";

const rows = [
  {
    subject: "특수교육학개론",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1",
    writer: "이무성",
    id: 0,
  },
  {
    subject: "특수교육학개론2",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2",
    writer: "이무성2",
    id: 1,
  },
  {
    subject: "특수교육학개론3",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3",
    writer: "이무성3",
    id: 2,
  },
];

export default function DownloadData() {
  const title = "다운로드 가능한 자료";
  const description = "신청이 수락된 자료들을 볼 수 있습니다.";

  return (
    <S.MyPageInfo>
      <TitleDescription title={title} description={description} />
      <S.BoundaryLine />

      <Styled.TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="registrationDate">
                과목
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
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="center" className="subjectData">
                  {row.subject}
                </TableCell>
                <TableCell align="center" className="dataNameData">
                  {row.dataName}
                </TableCell>
                <TableCell align="center" className="writerData">
                  {row.writer}
                </TableCell>
                <TableCell align="center">
                  <button type="button" className="downloadBtn">
                    다운받기
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Styled.TableContainer>
    </S.MyPageInfo>
  );
}
