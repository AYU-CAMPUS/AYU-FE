import styled from "@emotion/styled";
import { RequestListTable } from "../RequestList/RequestList.style";

export const SearchSection = styled.section`
  width: 100%;
  height: 208px;
  background: #ffffff;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: #dfdfe1;
  border-radius: 10px 10px 0px 0px;
  padding: 30px 50px 40px 30px;
`;

export const Term = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  min-width: 140px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: #394252;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 6px 0 6px;
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  margin-left: 150px;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    input {
      width: 20px;
      height: 20px;
      margin-right: 16px;
    }
  }
`;

export const Gender = styled(Label)`
  min-width: 0px;
`;
export const Male = styled(Label)`
  min-width: 0px;
`;
export const Female = styled(Label)`
  min-width: 0px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  margin-top: 36px;
  align-items: center;
  input {
    width: 100%;
    height: 51px;
    background: #ffffff;
    border: 1px solid #b2b7c1;
    border-radius: 10px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  padding-right: 60px;
  width: 100%;
  height: 74px;
  background: #f7f8f8;
  border: 2px solid #dfdfe1;
  border-radius: 0px 0px 10px 10px;
`;

export const ResetBtn = styled.button`
  height: 52px;
  background: #f7f8f8;
  border: 2px solid #eeb442;
  border-radius: 10px;
  padding: 12px 15px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: #eeb442;
`;
export const SearchBtn = styled(ResetBtn)`
  border: 2px solid #2f20d3;
  color: #2f20d3;
`;

export const UserManagementTable = styled(RequestListTable)``;
