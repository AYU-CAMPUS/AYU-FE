import styled from "@emotion/styled";

export const MainPageWrapper = styled.main``;

export const TitleInputSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin-top: 5.8rem;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 43px;
  color: #333333;
  @media (max-width: 768px) {
    margin-top: 3rem;
    font-size: 2.4rem;
    line-height: 30px;
  }
`;

export const BannerSection = styled.div`
  margin: 5rem 0;
  @media (max-width: 768px) {
    margin: 3rem 0;
  }
`;

export const DataSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  margin-bottom: 10rem;
  padding: 0 26.5rem;
  @media (max-width: 1440px) {
    padding: 0 10rem;
  }
  @media (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media (max-width: 768px) {
    gap: 6rem;
    margin-bottom: 6rem;
    padding: 0 2rem;
  }
`;

export const MajorArticle = styled.article``;
export const CultureArticle = styled.article``;
export const CategoryArticle = styled.article``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21.8rem;
    height: 7.8rem;
    background: #ffffff;
    border: 1px solid #abaeaf;
    border-radius: 5px;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 2rem;
    line-height: 25px;
    color: #333333;
    &:hover {
      background: #26409a;
      color: #ffffff;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;

    a {
      width: 17rem;
      height: 6.2rem;
      font-size: 1.8rem;
      line-height: 23px;
    }
  }
`;

export const ImageBtnWrapper = styled.div`
  display: flex;
  gap: 6rem;
  @media (max-width: 768px) {
    gap: 3rem;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;

export const ImageDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    width: 8.8rem;
    height: 8.8rem;
    border: 1px solid #abaeaf;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.8rem;
    letter-spacing: -0.05em;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
