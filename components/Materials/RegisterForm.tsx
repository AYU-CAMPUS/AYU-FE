import { ChangeEvent, FormEvent, useState } from "react";

import * as Styled from "./RegisterForm.style";

function RegisterForm() {
  const [textValue, setTextValue] = useState("");
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const [category, setCategory] = useState("");
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Styled.Container>
      <Styled.Heading>자료등록</Styled.Heading>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Formrow>
          <Styled.Col1>
            <label htmlFor="title">제목</label>
          </Styled.Col1>
          <Styled.Col2>
            <Styled.TitleInput id="title" placeholder="제목을 입력해주세요!" />
          </Styled.Col2>
        </Styled.Formrow>
        <Styled.Formrow>
          <Styled.Col1 height="210px">
            <label htmlFor="description">자료 상세설명</label>
          </Styled.Col1>
          <Styled.Col2 height="210px">
            <Styled.DescriptionTextArea
              id="description"
              placeholder="최대 200자"
              value={textValue}
              onChange={handleDescriptionChange}
            />
          </Styled.Col2>
        </Styled.Formrow>
        <Styled.Formrow>
          <Styled.Col1>
            <label htmlFor="page-number">페이지 수</label>
          </Styled.Col1>
          <Styled.Col2>
            <Styled.PageNumberInput
              id="page-number"
              placeholder="페이지 수(직접 입력)"
            />
          </Styled.Col2>
        </Styled.Formrow>
        <Styled.Formrow>
          <Styled.Col1>
            <Styled.Label>파일선택</Styled.Label>
          </Styled.Col1>
          <Styled.Col2>
            <Styled.SelectFileLabelButton htmlFor="select-file">
              <span>파일선택</span>
            </Styled.SelectFileLabelButton>
            <Styled.SelectFileGuide>
              <p>최대용량: 1mb(1024kb)</p>
              <p>등록가능 파일형식: hwp, pdf, ppt 압축파일</p>
            </Styled.SelectFileGuide>
            <Styled.SelectFileInput id="select-file" type="file" />
          </Styled.Col2>
        </Styled.Formrow>
        <Styled.Formrow>
          <Styled.Col1>
            <label htmlFor="select-category">카테고리 </label>
          </Styled.Col1>
          <Styled.Col2>
            <Styled.SelectCategory
              id="select-category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="" disabled selected>
                카테고리 선택
              </option>
              <option value="Orange">Orange</option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </Styled.SelectCategory>
          </Styled.Col2>
        </Styled.Formrow>

        <Styled.ButtonWrapper>
          <Styled.ExitButton type="button">취소하기</Styled.ExitButton>
          <Styled.RegisterButton type="submit">등록하기</Styled.RegisterButton>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Container>
  );
}

export default RegisterForm;
