import styled from "@emotion/styled";

export const Dashboard = styled.section`
  background: #ffffff;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 50px;
    line-height: 63px;
    color: #394252;
    margin: 35px 0 150px 0;
  }
`;

export const DashboardInfo = styled.div`
  display: flex;
  gap: 110px;
  align-items: center;
  text-align: center;
`;

export const BoundaryLine = styled.span`
  border: 1.5px solid #ced0d4;
  transform: rotate(90deg);
  width: 68px;
  height: 0px;
`;

export const FigureData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FigureNumber = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 26px;
  line-height: 33px;
  letter-spacing: 0.05em;
  color: #394252;
`;

export const FigureCategory = styled(FigureNumber)`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.03em;
`;

export const StatusWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 100px;
`;

export const TotalMember = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  color: #ffffff;
  width: 336px;
  height: 218px;
  background: #2f1fd3;
  border-radius: 10px;
  p {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.03em;
    padding: 20px 0 0 30px;
    margin-bottom: 47px;
  }
  div {
    display: flex;
    justify-content: center;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 0.05em;
  }
`;
export const InflowGroup = styled(TotalMember)`
  background: #5197f7;
`;
export const TradeNumber = styled(TotalMember)`
  background: #eeb442;
`;
