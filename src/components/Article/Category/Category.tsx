import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination, PaginationItem } from "@mui/material";
import { IPostsProps } from "../Major/Major";
import * as Styled from "./Category.style";
import { apiInstance } from "../../../api/config";
import CategoryAside from "./CategoryAside";

export default function Category() {
  const categoryTitle = "카테고리별 자료";

  const router = useRouter();
  const { list } = router.query;

  const categoryList = [
    "레포트",
    "PPT 템플릿",
    "한국사 자격증",
    "토익",
    "토플",
    "논문",
    "이력서",
    "컴활 자격증",
  ];

  const defaultSelect = (list || categoryList[0]) as string;
  const [selectCategoryNav, setSelectCategoryNav] = useState(defaultSelect);
  const category = categoryList.indexOf(String(selectCategoryNav)) + 11;

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
    const result = await apiInstance.get(`/board/${category}`, {
      params: {
        page: currentPage,
      },
    });
    setArticleList(result.data);
    setTotal(result.data.totalPages);
  };

  console.log(articleList);

  useEffect(() => {
    boardInquiryAPI();
  }, [category, currentPage]);

  return (
    <Styled.CategoryWrapper>
      <Styled.SchoolInfo>
        <CategoryAside
          categoryTitle={categoryTitle}
          categoryNav={categoryList}
          selectCategoryNav={selectCategoryNav}
          setSelectCategoryNav={setSelectCategoryNav}
          setCurrentPage={setCurrentPage}
        />

        <Styled.KeyWordArticleSection>
          <Styled.GuideLine>
            *자료명 클릭시 게시물 페이지로 넘어갑니다
          </Styled.GuideLine>
          <Styled.TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">등록일</TableCell>
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
      </Styled.SchoolInfo>
    </Styled.CategoryWrapper>
  );
}
