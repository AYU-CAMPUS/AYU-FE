import styled from "@emotion/styled";

export const CategoryWrapper = styled.main`
  padding: 6rem 26.5rem 0 26.5rem;
`;

export const SchoolInfo = styled.div`
  display: flex;
  gap: 4rem;
`;

export const KeyWordArticleSection = styled.section`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
  button {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 49.1rem;
  }
`;

export const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
`;

export const ThumbnailDescription = styled.div`
  display: flex;
  align-items: center;
  height: 21rem;
  padding: 1.1rem 3rem 1.1rem 2.5rem;
  gap: 4.8rem;
`;

export const Thumbnail = styled.div`
  width: 13.6rem;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 4px solid red;
`;

export const Description = styled.div``;

export const Title = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #26409a;
  margin-bottom: 0.8rem;
`;

export const Content = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #333333;
`;

export const SpanWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #767777;
  margin-top: 2rem;
`;

export const RegisterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rem;
  margin-top: 1.5rem;
  button {
    width: 13rem;
    height: 4.9rem;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #333333;
  }
`;
