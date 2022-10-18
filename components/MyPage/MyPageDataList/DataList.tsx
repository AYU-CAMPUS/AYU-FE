import * as Styled from "./style";

export default function DataList() {
  return (
    <Styled.MyPageDataList>
      <Styled.DataInfo>
        <Styled.Download>
          <Styled.Description>다운로드 가능한 자료</Styled.Description>
          <Styled.DataBtn>2건</Styled.DataBtn>
        </Styled.Download>

        <Styled.Exchange>
          <Styled.Description>교환 완료 수</Styled.Description>
          <Styled.DataBtn>2건</Styled.DataBtn>
        </Styled.Exchange>

        <Styled.Data>
          <Styled.Description>내가 올린 자료</Styled.Description>
          <Styled.DataBtn>2건</Styled.DataBtn>
        </Styled.Data>
      </Styled.DataInfo>

      <Styled.ExchangeInfo>
        <Styled.Description>교환 요청</Styled.Description>
        <Styled.DataBtn>17건</Styled.DataBtn>
      </Styled.ExchangeInfo>
    </Styled.MyPageDataList>
  );
}
