import * as Styled from "./style";

interface IDataListProps {
  downloadCount: number | undefined;
  exchangeRequestCount: number | undefined;
  exchangeSuccessCount: number | undefined;
  myDataCount: number | undefined;
}

export default function DataList({ ...props }: IDataListProps) {
  return (
    <Styled.MyPageDataList>
      <Styled.DataInfo>
        <Styled.Download>
          <Styled.Description>다운로드 가능한 자료</Styled.Description>
          <Styled.DataBtn>{props.downloadCount}건</Styled.DataBtn>
        </Styled.Download>

        <Styled.Exchange>
          <Styled.Description>교환 완료 수</Styled.Description>
          <Styled.DataBtn>{props.downloadCount}건</Styled.DataBtn>
        </Styled.Exchange>

        <Styled.Data>
          <Styled.Description>내가 올린 자료</Styled.Description>
          <Styled.DataBtn>{props.myDataCount}건</Styled.DataBtn>
        </Styled.Data>
      </Styled.DataInfo>

      <Styled.ExchangeInfo>
        <Styled.Description>교환 요청</Styled.Description>
        <Styled.DataBtn>{props.exchangeRequestCount}건</Styled.DataBtn>
      </Styled.ExchangeInfo>
    </Styled.MyPageDataList>
  );
}
