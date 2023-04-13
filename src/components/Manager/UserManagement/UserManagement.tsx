// import DatePicker from "react-datepicker"; // DatePicker 라는 컴포넌트도 가져오깅
// import "react-datepicker/dist/react-datepicker.css"; // 스타일 맥이기
// import { SetStateAction, useState } from "react";
// import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import * as Styled from "./UserManagement.style";
import { TableData } from "./TableData";
import dateIcon from "../../../../public/images/date.svg";

// const MyDatePicker = styled(DatePicker)`
//   background: #ffffff;
//   border: 1px solid #b2b7c1;
//   border-radius: 10px;
//   width: 217px;
//   height: 50px;
//   padding: 16px;
// `;

export default function UserManagement() {
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  return (
    <>
      <Styled.SearchSection>
        <Styled.Term>
          <Styled.Label>기간</Styled.Label>

          {/* <Styled.DateWrapper>
            <MyDatePicker
              selected={startDate}
              dateFormat="yyyy-MM-dd" // 날짜 형식
              onChange={(date: SetStateAction<undefined>) => setStartDate(date)}
            />
            <span>~</span>
            <MyDatePicker
              selected={endDate}
              dateFormat="yyyy-MM-dd" // 날짜 형식
              onChange={(date: SetStateAction<undefined>) => setEndDate(date)}
            />
          </Styled.DateWrapper> */}

          <Styled.GenderWrapper>
            <Styled.Gender>성별</Styled.Gender>
            <div>
              <input type="checkbox" />
              <Styled.Male>남성</Styled.Male>
            </div>
            <div>
              <input type="checkbox" />
              <Styled.Female>여성</Styled.Female>
            </div>
          </Styled.GenderWrapper>
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

      <Styled.UserManagementTable>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">아이디</TableCell>
              <TableCell align="center">닉네임</TableCell>
              <TableCell align="center">웹메일</TableCell>
              <TableCell align="center">생성일</TableCell>
              <TableCell align="center">정지</TableCell>
              <TableCell align="center">정지사유</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {TableData.map(row => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.userId}</TableCell>
                <TableCell align="center">{row.nickName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.registrationDate}</TableCell>
                <TableCell align="center">
                  <Image src={dateIcon} />
                </TableCell>
                <TableCell align="center">{row.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Styled.UserManagementTable>
    </>
  );
}
