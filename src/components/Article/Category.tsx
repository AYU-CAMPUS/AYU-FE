import Image from "next/image";
import * as Styled from "./Category.style";
import Input from "../Input/Input";
import searchIcon from "../../public/images/search.svg";
import DataCategoryAside from "./DataCategoryAside";
import { CategoryData } from "../MainPage/DataJson";

export default function Category() {
  const categoryTitle = "카테고리별 자료";

  return (
    <Styled.CategoryWrapper>
      <Styled.SchoolInfo>
        <DataCategoryAside
          categoryTitle={categoryTitle}
          categoryData={CategoryData}
          height="53.2rem"
        />

        <Styled.KeyWordArticleSection>
          <Styled.InputWrapper>
            <Input />
            <button type="button">
              <Image src={searchIcon} />
            </button>
          </Styled.InputWrapper>

          <Styled.TemplateWrapper>
            <Styled.ThumbnailDescription>
              <Styled.Thumbnail />
              <Styled.Description>
                <Styled.Title>
                  활용도가 많은 경제 비즈니스 템플릿입니다. 금융, 비즈니,
                  포토폴리오
                </Styled.Title>
                <Styled.Content>
                  202012345 홍 길 동 “What is your Dream?” 경영학부 내용을
                  입력해주세요 . 필요한 내용을 이곳에 입력해 주세요 . 내용을
                  입력해주세요 . 필요한 내용을 이곳에 입력해 주세요 주요 주제를
                  입력해 주세요 02 두번째 주제 03 세번째 주재 04 네..
                </Styled.Content>
                <Styled.SpanWrapper>
                  <span>PPT 템플릿</span>
                  <span>l</span>
                  <span>58페이지</span>
                  <span>l</span>
                  <span>등록일 2022.05.23</span>
                </Styled.SpanWrapper>
              </Styled.Description>
            </Styled.ThumbnailDescription>
          </Styled.TemplateWrapper>

          <Styled.RegisterBtn>
            <div />
            <button type="button">자료등록</button>
          </Styled.RegisterBtn>
        </Styled.KeyWordArticleSection>
      </Styled.SchoolInfo>
    </Styled.CategoryWrapper>
  );
}
