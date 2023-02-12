// import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import {
//   EnumCategory,
//   EnumDepartmentType,
//   EnumFileType,
// } from "../Materials/types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import * as Styled from "./Major.style";
// import Input from "../Input/Input";
// import searchIcon from "../../public/images/search.svg";
import CollegeCategoryAside from "./CollegeCategoryAside";
import { selectDepartmentList } from "../data";
import { apiInstance } from "../../../pages/api/setting";
import MajorSelection from "../FillterSelection/MajorSelection";
import GradeSelection from "../FillterSelection/GradeSelection";
import TestSelection from "../FillterSelection/TestSelection";

export interface IPostsProps {
  totalPages: number;
  boardList: [
    {
      createdDate: string;
      gradeType: string;
      numberOfSuccessfulExchanges: number;
      subjectName: string;
      title: string;
      id: number;
    }
  ];
}

export default function Article() {
  const categoryTitle = "학과별 전공 자료";

  const router = useRouter();
  const { college } = router.query;

  const collegeList = [
    "신학대학",
    "인문대학",
    "예술체육대학",
    "사회과학대학",
    "창의융합대학",
  ];

  const defaultSelect = (college || collegeList[0]) as string;
  const [selectDepartmentNav, setSelectDepartmentNav] = useState(defaultSelect);
  const category = collegeList.indexOf(String(selectDepartmentNav));

  const [selectDepartment, setSelectDepartment] = useState<number[]>([]);
  const [selectGrade, setSelectGrade] = useState<number[]>([]);
  const [selectTest, setSelectTest] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [articleList, setArticleList] = useState<IPostsProps>();
  const [total, setTotal] = useState<number>(1);
  const numPages = Math.ceil(total / 2);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleRegisterClick = () => {
    router.push("/materials/register");
  };

  const boardInquiryAPI = async () => {
    const result = await apiInstance.get(`/board/${category}`, {
      params: {
        page: currentPage,
        type: `${selectTest}`,
        grade: `${selectGrade}`,
        department: `${selectDepartment}`,
      },
    });
    setArticleList(result.data);
    setTotal(result.data.totalPages);
  };

  console.log(articleList);

  useEffect(() => {
    boardInquiryAPI();
  }, [category, currentPage, selectDepartment, selectGrade, selectTest]);

  return (
    <Styled.ArtcleWrapper>
      <Styled.SchoolInfo>
        <CollegeCategoryAside
          categoryTitle={categoryTitle}
          categoryNav={collegeList}
          selectDepartmentNav={selectDepartmentNav}
          setSelectDepartmentNav={setSelectDepartmentNav}
          setSelectDepartment={setSelectDepartment}
          setSelectGrade={setSelectGrade}
          setSelectTest={setSelectTest}
          setCurrentPage={setCurrentPage}
        />

        <Styled.CategorySection>
          <Styled.FillterSelectionWrapper>
            <MajorSelection
              selectDepartmentList={selectDepartmentList}
              selectDepartmentNav={selectDepartmentNav}
              setSelectDepartment={setSelectDepartment}
              selectDepartment={selectDepartment}
            />
            <GradeSelection
              selectGrade={selectGrade}
              setSelectGrade={setSelectGrade}
              selectDepartmentNav={selectDepartmentNav}
            />
            <TestSelection
              selectTest={selectTest}
              setSelectTest={setSelectTest}
              selectDepartmentNav={selectDepartmentNav}
            />
          </Styled.FillterSelectionWrapper>
        </Styled.CategorySection>
      </Styled.SchoolInfo>

      <Styled.KeyWordArticleSection>
        {/* <Styled.InputWrapper>
          <Input />
          <button type="button">
            <Image src={searchIcon} />
          </button>
        </Styled.InputWrapper> */}

        <Styled.TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">등록일</TableCell>
                <TableCell align="center">과목</TableCell>
                <TableCell align="center">학년</TableCell>
                <TableCell align="center">자료명</TableCell>
                <TableCell align="center">교환수</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {articleList?.boardList.length ? (
                articleList?.boardList.map(article => (
                  <TableRow key={article.id}>
                    <TableCell align="center">{article.createdDate}</TableCell>
                    <TableCell align="center">{article.subjectName}</TableCell>
                    <TableCell align="center">
                      {`${article.gradeType}학년`}
                    </TableCell>

                    <Link href={`/article/${article.id}`}>
                      <TableCell align="center">{article.title}</TableCell>
                    </Link>

                    <TableCell align="center">
                      {article.numberOfSuccessfulExchanges}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableCell align="center" colSpan={5}>
                  <p className="exchangeStatus">첫 자료를 등록해주세요! </p>
                </TableCell>
              )}
            </TableBody>
          </Table>
        </Styled.TableContainer>

        <Styled.RegisterBtn>
          <div />
          <button type="button" onClick={handleRegisterClick}>
            자료등록
          </button>
        </Styled.RegisterBtn>

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
          renderItem={item => (
            <PaginationItem {...item} sx={{ fontSize: 12 }} />
          )}
        />
      </Styled.KeyWordArticleSection>
    </Styled.ArtcleWrapper>
  );
}
