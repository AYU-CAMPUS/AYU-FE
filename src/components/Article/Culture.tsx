import Image from "next/image";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./Culture.style";
import Input from "../Input/Input";
import searchIcon from "../../public/images/search.svg";
import DataCategoryAside from "./DataCategoryAside";
import { CultureData } from "../MainPage/DataJson";

export default function Culture() {
  const [dataStatus] = useState(true);
  const categoryTitle = "교양대학 자료";

  const rows = [
    {
      registrationDate: "22.10.12",
      subject: "특수교육학개론",
      dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1",
      views: "1.4만",
      id: 0,
    },
    {
      registrationDate: "22.10.12",
      subject: "특수교육학개론",
      dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2",
      views: "1.4만",
      id: 1,
    },
    {
      registrationDate: "22.10.12",
      subject: "특수교육학개론",
      dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3",
      views: "1.4만",
      id: 2,
    },
    {
      registrationDate: "22.10.12",
      subject: "특수교육학개론",
      dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원4",
      views: "1.4만",
      id: 3,
    },
    {
      registrationDate: "22.10.12",
      subject: "특수교육학개론",
      dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원5",
      views: "1.4만",
      id: 4,
    },
    {
      registrationDate: "22.10.12",
      subject: "특수교육학개론",
      dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원6",
      views: "1.4만",
      id: 5,
    },
  ];

  return (
    <Styled.CultureWrapper>
      <Styled.SchoolInfo>
        <DataCategoryAside
          categoryTitle={categoryTitle}
          categoryData={CultureData}
          height="40.6rem"
        />

        <Styled.KeyWordArticleSection>
          <Styled.InputWrapper>
            <Input />
            <button type="button">
              <Image src={searchIcon} />
            </button>
          </Styled.InputWrapper>

          <Styled.TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">등록일</TableCell>
                  <TableCell align="center">과목</TableCell>
                  <TableCell align="center">자료명</TableCell>
                  <TableCell align="center">조회수</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {dataStatus ? (
                  rows.map(row => (
                    <TableRow key={row.registrationDate}>
                      <TableCell align="center">
                        {row.registrationDate}
                      </TableCell>
                      <TableCell align="center">{row.subject}</TableCell>
                      <TableCell align="center">{row.dataName}</TableCell>
                      <TableCell align="center">{row.views}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableCell align="center" colSpan={4}>
                    <p className="exchangeStatus">첫 자료를 등록해주세요!</p>
                  </TableCell>
                )}
              </TableBody>
            </Table>
          </Styled.TableContainer>
          <Styled.RegisterBtn>
            <div />
            <button type="button">자료등록</button>
          </Styled.RegisterBtn>
        </Styled.KeyWordArticleSection>
      </Styled.SchoolInfo>
    </Styled.CultureWrapper>
  );
}
