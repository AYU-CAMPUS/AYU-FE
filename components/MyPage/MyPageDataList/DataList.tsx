import * as Styled from "./style";

export default function DataList() {
  return (
    <Styled.MyPageDataList>
      <div className="dataInfo">
        <div className="downloadBtn">
          <p className="description">다운로드 가능한 자료</p>
          <button className="downloadResults" type="button">
            2건
          </button>
        </div>
        <div className="exchangeBtn">
          <p className="description">교환 완료 수</p>
          <button className="completeResults" type="button">
            2건
          </button>
        </div>
        <div className="dataBtn">
          <p className="description">내가 올린 자료</p>
          <button className="dataResults" type="button">
            2건
          </button>
        </div>
      </div>
      <div className="exchangeInfo">
        <p className="description">교환 요청</p>
        <button className="exchageResults" type="button">
          2건
        </button>
      </div>
    </Styled.MyPageDataList>
  );
}
