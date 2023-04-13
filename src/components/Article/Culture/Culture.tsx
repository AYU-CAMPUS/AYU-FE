import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import * as Styled from "./Culture.style";
// import Input from "../Input/Input";
// import searchIcon from "../../public/images/search.svg";
import CultureCategoryAside from "./CultureCategoryAside";
import { IPostsProps } from "../Major/Major";
import TestSelection from "../FillterSelection/TestSelection";
import { apiInstance } from "../../../api/config";

export default function Culture() {
  const categoryTitle = "교양대학 자료";

  const router = useRouter();
  const { category } = router.query;

  const cultureList = [
    "인성양성",
    "리더쉽",
    "융합실무",
    "문제해결",
    "글로벌",
    "의사소통",
  ];

  const defaultSelect = (category || cultureList[0]) as string;
  const [selectCultureNav, setSelectCultureNav] = useState(defaultSelect);
  const categoryData = cultureList.indexOf(String(selectCultureNav)) + 5;

  const [selectTest, setSelectTest] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articleList, setArticleList] = useState<IPostsProps>();
  const [total, setTotal] = useState<number>(1);

  const [nickName, setNickName] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setNickName(localStorage.getItem("nickName"));
    }
  }, []);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleRegisterClick = () => {
    router.push("/materials/register");
  };

  const boardInquiryAPI = async () => {
    const result = await apiInstance.get(`/board/${categoryData}`, {
      params: {
        page: currentPage,
        type: `${selectTest}`,
      },
    });
    setArticleList(result.data);
    setTotal(result.data.totalPages);
  };

  useEffect(() => {
    boardInquiryAPI();
  }, [categoryData, currentPage, selectTest]);

  return (
    <Styled.CultureWrapper>
      <Styled.SchoolInfo>
        <CultureCategoryAside
          categoryTitle={categoryTitle}
          categoryNav={cultureList}
          selectCultureNav={selectCultureNav}
          setSelectCultureNav={setSelectCultureNav}
          setSelectTest={setSelectTest}
          setCurrentPage={setCurrentPage}
        />

        <Styled.SectionWrapper>
          <Styled.CategorySection>
            <Styled.FillterSelectionWrapper>
              <TestSelection
                selectTest={selectTest}
                setSelectTest={setSelectTest}
                selectDepartmentNav={selectCultureNav}
              />
            </Styled.FillterSelectionWrapper>
          </Styled.CategorySection>

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
                    <TableCell align="center">자료명</TableCell>
                    <TableCell align="center">교환수</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {articleList?.boardList.length ? (
                    articleList?.boardList.map(article => (
                      <TableRow key={article.id}>
                        <TableCell align="center">
                          {article.createdDate}
                        </TableCell>
                        <TableCell align="center">
                          {article.subjectName}
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
                    <TableCell align="center" colSpan={4}>
                      <p className="exchangeStatus">첫 자료를 등록해주세요!</p>
                    </TableCell>
                  )}
                </TableBody>
              </Table>
            </Styled.TableContainer>

            {nickName && (
              <Styled.RegisterBtn>
                <div />
                <button type="button" onClick={handleRegisterClick}>
                  자료등록
                </button>
              </Styled.RegisterBtn>
            )}

            <Pagination
              count={total}
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
        </Styled.SectionWrapper>
      </Styled.SchoolInfo>
    </Styled.CultureWrapper>
  );
}
