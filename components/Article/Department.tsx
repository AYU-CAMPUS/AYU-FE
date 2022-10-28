import Image from "next/image";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "./Department.style";
import Input from "../Input/Input";
import searchIcon from "../../public/images/search.svg";
import DataCategoryAside from "./DataCategoryAside";
import { MajorsData } from "../MainPage/DataJson";
import CategorySelection from "./CategorySelection";
import { EngineeringCollege } from "./data";

const rows = [
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    grade: "1학년",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원1",
    views: "1.4만",
    id: 0,
  },
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    grade: "1학년",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원2",
    views: "1.4만",
    id: 1,
  },
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    grade: "1학년",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원3",
    views: "1.4만",
    id: 2,
  },
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    grade: "1학년",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원4",
    views: "1.4만",
    id: 3,
  },
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    grade: "1학년",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원5",
    views: "1.4만",
    id: 4,
  },
  {
    registrationDate: "22.10.12",
    subject: "특수교육학개론",
    grade: "1학년",
    dataName: " 특수교육학개론 개별화 교육 프로그램과 긍정적 행동 지원6",
    views: "1.4만",
    id: 5,
  },
];

export default function Article() {
  const [dataStatus] = useState(false);
  const categoryTitle = "학과별 전공 자료";

  return (
    <Styled.ArtcleWrapper>
      <Styled.SchoolInfo>
        <DataCategoryAside
          categoryTitle={categoryTitle}
          categoryData={MajorsData}
        />

        <Styled.CategorySection>
          <CategorySelection departmentCategory={EngineeringCollege} />
        </Styled.CategorySection>
      </Styled.SchoolInfo>

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
                <TableCell align="center">학년</TableCell>
                <TableCell align="center">자료명</TableCell>
                <TableCell align="center">조회수</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dataStatus ? (
                rows.map(row => (
                  <TableRow key={row.registrationDate}>
                    <TableCell align="center">{row.registrationDate}</TableCell>
                    <TableCell align="center">{row.subject}</TableCell>
                    <TableCell align="center">{row.grade}</TableCell>
                    <TableCell align="center">{row.dataName}</TableCell>
                    <TableCell align="center">{row.views}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableCell align="center" colSpan={5}>
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
    </Styled.ArtcleWrapper>
  );
}
