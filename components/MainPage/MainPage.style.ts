import styled from "@emotion/styled";

export const MainPageWrapper = styled.main``;

export const TitleInputSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin: 5.8rem 0 3.8rem 0;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 43px;
  color: #333333;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  button {
    position: absolute;
    top: 2rem;
    right: 3rem;
  }
`;

export const BannerSection = styled.div`
  margin: 4.2rem 0 13rem 0;
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    width: 6.7rem;
    height: 6.7rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10rem;
    margin: 0 26.5rem;
  }
`;

export const DataSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  gap: 16rem;
  margin-bottom: 34rem;
  padding: 0 26.5rem;
`;

export const MajorArticle = styled.article``;
export const CultureArticle = styled(MajorArticle)``;
export const CategoryArticle = styled(MajorArticle)``;
// export const ExchangeArticle = styled(MajorArticle)``;

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
`;

export const ImageBtnWrapper = styled.div`
  display: flex;
  gap: 6rem;
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
`;

export const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExchangeBtnWrapper = styled(ButtonWrapper)`
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    min-width: 20rem;
    height: 30rem;
    border-radius: 5px;
    border: 1px solid red;
  }
`;
