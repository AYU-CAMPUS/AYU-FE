import * as Styled from "./Dashboard.style";

export default function Dashboard() {
  return (
    <Styled.Dashboard>
      <h1>AYU Campus</h1>

      <Styled.DashboardInfo>
        <Styled.FigureData>
          <Styled.FigureNumber>288</Styled.FigureNumber>
          <Styled.FigureCategory>총 회원 수</Styled.FigureCategory>
        </Styled.FigureData>
        <Styled.BoundaryLine />

        <Styled.FigureData>
          <Styled.FigureNumber>288</Styled.FigureNumber>
          <Styled.FigureCategory>하루 유입수</Styled.FigureCategory>
        </Styled.FigureData>
        <Styled.BoundaryLine />

        <Styled.FigureData>
          <Styled.FigureNumber>288</Styled.FigureNumber>
          <Styled.FigureCategory>교환신청 수</Styled.FigureCategory>
        </Styled.FigureData>
      </Styled.DashboardInfo>

      <Styled.StatusWrapper>
        <Styled.TotalMember>
          <p>총 회원 수</p>
          <div>26K(+40.9%)</div>
        </Styled.TotalMember>

        <Styled.InflowGroup>
          <p>하루 유입 수 </p>
          <div>26K(+40.9%)</div>
        </Styled.InflowGroup>

        <Styled.TradeNumber>
          <p>교환신청 수</p>
          <div>26K(+40.9%)</div>
        </Styled.TradeNumber>
      </Styled.StatusWrapper>
    </Styled.Dashboard>
  );
}
