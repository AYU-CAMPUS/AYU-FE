import styled from "@emotion/styled";

export const ArticleDetailWrapper = styled.main`
  padding: 7rem 31.3rem 0 31.3rem;
  .swal2-popup {
    font-size: 100px !important;
    font-family: Georgia, serif;
    height: 1000px;
  }
  .swal2-html-container {
    font-size: 100px !important;
    height: 1000px;
  }
`;

export const Article = styled.div`
  display: flex;
  gap: 6.3rem;
`;

export const ArticleTitle = styled.h1`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 30px;
  line-height: 3.8rem;
  letter-spacing: -0.05em;
  color: #333333;
  border-bottom: 2px solid #abaeaf;
  padding: 7px 16px;
`;

export const ArticleSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ArticleInfoList = styled.dl`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;
  div {
    display: flex;
    padding: 18px 16px;
  }
`;

export const ArticleInfoTitle = styled.dt`
  width: 23.8rem;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 28px;
  letter-spacing: -0.1em;
  color: #333333;
`;

export const ArticleInfoContent = styled.dd`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 28px;
  letter-spacing: -0.05em;
  color: #8f9091;
`;

export const ArticleDetailInfo = styled.section`
  border-top: 2px solid #abaeaf;
  padding: 40px 48px;
  margin-top: 120px;

  p {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
`;

export const ArticleDetailTitle = styled.h1`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.05em;
  color: #333333;
  margin-bottom: 36px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

// export const CommentWrapper = styled.section`
//   padding: 40px 48px;
// `;

// export const CommentTitle = styled(ArticleDetailTitle)`
//   margin-bottom: 15px;
// `;

// export const CommentRegister = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   margin-bottom: 40px;
// `;

// export const CommentSection = styled.div`
//   display: flex;
//   margin-bottom: 50px;
//   gap: 15px;
// `;

// export const CommentInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 5px;
// `;

// export const Writer = styled.span`
//   font-family: "Spoqa Han Sans Neo";
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 23px;
//   letter-spacing: -0.05em;
//   color: #333333;
// `;

// export const CommentContent = styled(Writer)`
//   font-weight: 400;
// `;

// export const CommentHour = styled.span`
//   font-family: "Spoqa Han Sans Neo";
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 20px;
//   letter-spacing: -0.05em;
//   color: #8f9091;
// `;

// export const CommentReply = styled(CommentHour)``;

// export const CommentReport = styled(CommentHour)``;

// export const Comment = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// export const CommentOption = styled(Comment)``;
