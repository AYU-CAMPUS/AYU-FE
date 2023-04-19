import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

import CategoryModal from "./CategoryModal/CategoryModal";
import ModalOverlay from "./CategoryModal/ModalOverlay";
import { EnumCategory, EnumDepartmentType, EnumFileType } from "./types";
import { apiInstance } from "../../api/config";

import * as Styled from "./RegisterForm.style";

function SmallTextInput({
  id,
  placeholder,
  name,
  onChange,
}: {
  id: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      css={[
        tw`w-[180px] h-[42px] bg-white border border-solid border-[#000000] border-opacity-30 rounded-[5px] pl-[15px] text-[18px]`,
        css`
          &::placeholder {
            font: 16px sans-serif;
            transform: translate(0, 2px);
          }
        `,
      ]}
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}

interface ReqBody {
  title: string;
  gradeType: number;
  subjectName: string;
  professorName: string;
  numberOfFilePages: number;
  content: string;
}

function RegisterForm() {
  // 파일 업로드
  const [file, setFile] = useState<File | null>(null);
  const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const [isOpenCategoryDialog, setIsOpenCategoryDialog] = useState(false);

  const openCategoryDialog = (e: MouseEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setIsOpenCategoryDialog(true);
  };

  const closeCategoryDialog = (e?: MouseEvent<HTMLDivElement>) => {
    e?.preventDefault();
    setIsOpenCategoryDialog(false);
  };

  useEffect(() => {
    // 모달을 열 때 body의 overflow-y를 hidden으로 바꾸고 position: fixed를 해준다.
    // 그리고 모달이 닫힐 때 다시 원래대로 바꿔준다.
    if (isOpenCategoryDialog) {
      document.body.style.overflowY = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.position = "relative";
    }
  }, [isOpenCategoryDialog]);

  // 선택된 카테고리 항목
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("카테고리 선택");
  useEffect(() => {
    // selectedCategories가 비어 있지 않다면 category는 "카테고리 선택"에서 "선택완료"로 바뀐다.
    if (selectedCategories.length > 0) {
      setCategory("선택완료");
    } else {
      setCategory("카테고리 선택");
    }
  }, [selectedCategories]);

  const [reqBody, setReqBody] = useState<ReqBody>({
    title: "",
    content: "",
    gradeType: 0,
    subjectName: "",
    professorName: "",
    numberOfFilePages: 0,
  });
  const handleOnChange = <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(
    e: ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setReqBody({
      ...reqBody,
      [name]: value,
    });
  };

  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const writeRequest = {
      ...reqBody,
      ...(selectedCategories[1] && {
        category:
          EnumCategory[selectedCategories[1] as keyof typeof EnumCategory],
      }),
      ...(Number(selectedCategories[0]) < 3 &&
        selectedCategories[2] && {
          departmentType:
            EnumDepartmentType[
              selectedCategories[2] as keyof typeof EnumDepartmentType
            ],
        }),
      ...(Number(selectedCategories[0]) === 1 &&
        selectedCategories[3] && {
          fileType:
            EnumFileType[selectedCategories[3] as keyof typeof EnumFileType],
        }),
    };

    const formData = new FormData();
    if (!file) {
      // error handling
      alert("파일을 선택해주세요.");
      return;
    }
    // 빈 필드가 있으면 alert
    if (Object.values(writeRequest).some(value => value === "")) {
      alert("입력 필드를 모두 채워주세요.");
      return;
    }

    formData.append("file", file);
    formData.append(
      "writeRequest",
      new Blob([JSON.stringify(writeRequest)], { type: "application/json" })
    );
    apiInstance
      .post("/board", formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then(res => {
        console.log(res);
        router.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Styled.Container>
      <Styled.HeadingContainer>
        <Styled.Heading>자료등록</Styled.Heading>
        <Styled.GuideLine>
          *자료 등록시에 2~3일정도 소요될 수 있습니다.
        </Styled.GuideLine>
      </Styled.HeadingContainer>

      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Formrow>
          <Styled.Col1>
            <label htmlFor="title">제목</label>
          </Styled.Col1>
          <Styled.Col2>
            <Styled.TitleInput
              id="title"
              name="title"
              placeholder="제목을 입력해주세요!"
              onChange={handleOnChange}
            />
          </Styled.Col2>
        </Styled.Formrow>
        <Styled.Formrow>
          <Styled.Col1 height="210px">
            <label htmlFor="description">자료 상세설명</label>
          </Styled.Col1>
          <Styled.Col2 height="210px">
            <Styled.DescriptionTextArea
              id="description"
              name="content"
              placeholder="최대 200자"
              value={reqBody.content}
              onChange={e => handleOnChange<HTMLTextAreaElement>(e)}
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
              type="number"
              name="numberOfFilePages"
              onChange={e => handleOnChange<HTMLInputElement>(e)}
              css={[
                css`
                  /* inpue type number의 기본 스타일 제거 */
                  &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                  }
                `,
              ]}
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
              {
                // 파일이 선택되었다면 파일 이름을 보여준다.
                file ? (
                  <p>{file.name}</p>
                ) : (
                  // 파일이 선택되지 않았다면 아래의 문구를 보여준다.
                  !file && (
                    <>
                      <p>최대용량: 1mb(1024kb)</p>
                      <p>등록가능 파일형식: hwp, pdf, ppt 압축파일</p>
                    </>
                  )
                )
              }
            </Styled.SelectFileGuide>
            <Styled.SelectFileInput
              id="select-file"
              type="file"
              accept=".hwp, .pdf, .ppt, .pptx, .zip, .rar"
              name="file"
              onChange={handleOnChangeFile}
            />
          </Styled.Col2>
        </Styled.Formrow>
        <Styled.Formrow>
          <Styled.Col1>
            <label htmlFor="select-category">카테고리 </label>
          </Styled.Col1>
          <Styled.Col2>
            <Styled.SelectCategory
              id="select-category"
              name="category"
              required
              // select 형식이지만 팝업에서 처리하므로 따로 category를 변경해주어야 한다.
              onChange={e => e.preventDefault()}
              onClick={openCategoryDialog}
              value={category}
            >
              <option
                value="카테고리 선택"
                disabled
                style={{
                  display: "none",
                }}
              >
                카테고리 선택
              </option>
              <option
                value="선택완료"
                style={{
                  display: "none",
                }}
              >
                선택완료
              </option>
            </Styled.SelectCategory>
            <div css={[tw`ml-[25px] text-[16px] font-normal text-[#8F9091]`]}>
              {selectedCategories.slice(1).map((cat, idx) => {
                return (
                  <span key={cat}>
                    {cat}
                    {idx !== selectedCategories.length - 2 && ">"}
                  </span>
                );
              })}
            </div>
          </Styled.Col2>
        </Styled.Formrow>
        {/* 1. 학과별 전공자료 선택시 보여줄 추가 UI */}
        {selectedCategories[0] === "1" && (
          <>
            <Styled.Formrow>
              <Styled.Col1>
                <label htmlFor="subject_professor">과목명,교수명</label>
              </Styled.Col1>
              <Styled.Col2 gap="15px">
                <SmallTextInput
                  id="subject_professor"
                  placeholder="과목명"
                  name="subjectName"
                  onChange={handleOnChange}
                />
                <SmallTextInput
                  id="subject_professor"
                  placeholder="교수명"
                  name="professorName"
                  onChange={handleOnChange}
                />
              </Styled.Col2>
            </Styled.Formrow>
            <Styled.Formrow>
              <Styled.Col1>
                <label htmlFor="gradeType">학년 선택</label>
              </Styled.Col1>
              <Styled.Col2>
                <select
                  css={[
                    tw`w-[180px] h-[42px] bg-white border border-solid border-[#000000] border-opacity-30 rounded-[5px] pl-[15px] font-normal text-[16px] leading-[20px]`,
                    css`
                      &:required:invalid {
                        color: #8f9091;
                      }
                      &[value=""][disabled] {
                        display: none;
                      }
                      &::placeholder {
                        color: #8f9091;
                        transform: translate(0, 2px);
                      }
                    `,
                  ]}
                  id="gradeType"
                  value={reqBody.gradeType}
                  name="gradeType"
                  onChange={e => handleOnChange<HTMLSelectElement>(e)}
                >
                  <option value="" hidden>
                    Type
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </Styled.Col2>
            </Styled.Formrow>
          </>
        )}
        {/* 카테고리 선택을 위한 dialog */}
        {isOpenCategoryDialog && (
          <ModalOverlay closeCategoryDialog={closeCategoryDialog}>
            <CategoryModal
              setSelectedCategories={setSelectedCategories}
              closeCategoryDialog={closeCategoryDialog}
            />
          </ModalOverlay>
        )}
        <Styled.ButtonWrapper>
          <Styled.ExitButton type="button">취소하기</Styled.ExitButton>
          <Styled.RegisterButton type="submit">등록하기</Styled.RegisterButton>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Container>
  );
}

export default RegisterForm;
