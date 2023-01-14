import DatePicker from "react-datepicker"; // DatePicker 라는 컴포넌트도 가져오깅
import "react-datepicker/dist/react-datepicker.css"; // 스타일 맥이기
import { SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import * as Styled from "./SearchSection.style";

const MyDatePicker = styled(DatePicker)`
  background: #ffffff;
  border: 1px solid #b2b7c1;
  border-radius: 10px;
  width: 217px;
  height: 50px;
  padding: 16px;
`;

export default function SearchSection() {
  const termBtn = [
    {
      term: "당일",
      id: 0,
    },
    {
      term: "1주일",
      id: 1,
    },
    {
      term: "15일",
      id: 2,
    },
    {
      term: "1개월",
      id: 3,
    },
    {
      term: "3개월",
      id: 4,
    },
  ];

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <>
      <Styled.SearchSection>
        <Styled.Term>
          <Styled.Label>기간</Styled.Label>
          <Styled.ButtonWrapper>
            {termBtn.map(term => {
              return <button type="button">{term.term}</button>;
            })}
          </Styled.ButtonWrapper>

          <Styled.DateWrapper>
            <MyDatePicker
              selected={startDate}
              dateFormat="yyyy-MM-dd" // 날짜 형식
              onChange={(date: SetStateAction<string>) => setStartDate(date)}
            />
            <span>~</span>
            <MyDatePicker
              selected={endDate}
              dateFormat="yyyy-MM-dd" // 날짜 형식
              onChange={(date: SetStateAction<string>) => setEndDate(date)}
            />
          </Styled.DateWrapper>
        </Styled.Term>

        <Styled.SearchWrapper>
          <Styled.Label>검색어</Styled.Label>
          <input type="text" />
        </Styled.SearchWrapper>
      </Styled.SearchSection>

      <Styled.ButtonSection>
        <Styled.ResetBtn>초기화</Styled.ResetBtn>
        <Styled.SearchBtn>검색</Styled.SearchBtn>
      </Styled.ButtonSection>
    </>
  );
}
