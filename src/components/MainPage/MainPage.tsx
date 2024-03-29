import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import * as Styled from "./MainPage.style";
import DataView from "./DataView";
import BannerTitle from "../../../public/images/BannerTitle.png";

import { CollegeDataList, CultureDataList, CategoryDataList } from "./DataJson";
import Header from "../Header/Header";
import { apiInstance } from "../../api/config";

export default function MainPage() {
  const loginAPI = async () => {
    try {
      const result = await apiInstance.get("/user/notification");
      localStorage.setItem("nickName", result.data.nickName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loginAPI();
  }, []);

  const MajorTitle = "학과별 전공 자료";
  const MajorDescription = "학과별 자료를 모아놨어요!";

  const CultureTitle = "교양대학 자료";
  const CultureDescription = "교양대학 자료들만 모아놨어요!";

  const CategoryTitle = "카테고리별 자료";
  const CategoryDescription = "다양한 자료를 모아놨어요!";

  return (
    <>
      <Header />
      <Styled.MainPageWrapper>
        <Styled.TitleInputSection>
          <Styled.MainTitle>
            안양대 학생들을 위한 자료 공유 플랫폼!
          </Styled.MainTitle>
        </Styled.TitleInputSection>

        <Styled.BannerSection>
          <Image src={BannerTitle} />
        </Styled.BannerSection>

        <Styled.DataSection>
          <Styled.MajorArticle>
            <DataView title={MajorTitle} description={MajorDescription} />

            <Styled.ButtonWrapper>
              {CollegeDataList.map(Major => {
                return (
                  <Link
                    key={Major.id}
                    href={`/article/major?college=${Major.description}`}
                  >
                    <a>{Major.description}</a>
                  </Link>
                );
              })}
            </Styled.ButtonWrapper>
          </Styled.MajorArticle>

          <Styled.CultureArticle>
            <DataView title={CultureTitle} description={CultureDescription} />

            <Styled.ImageBtnWrapper>
              {CultureDataList.map(Culture => {
                return (
                  <Link
                    key={Culture.id}
                    href={`/article/culture?category=${Culture.description}`}
                  >
                    <Styled.ImageDescriptionWrapper>
                      <div>
                        <Image src={Culture.image} />
                      </div>
                      <p> {Culture.description}</p>
                    </Styled.ImageDescriptionWrapper>
                  </Link>
                );
              })}
            </Styled.ImageBtnWrapper>
          </Styled.CultureArticle>

          <Styled.CategoryArticle>
            <DataView title={CategoryTitle} description={CategoryDescription} />

            <Styled.ButtonWrapper>
              {CategoryDataList.map(Category => {
                return (
                  <Link
                    key={Category.id}
                    href={`/article/category?list=${Category.description}`}
                  >
                    <a> {Category.description}</a>
                  </Link>
                );
              })}
            </Styled.ButtonWrapper>
          </Styled.CategoryArticle>

          {/* <Styled.ExchangeArticle>
          <DataView title={ExchangeTitle} />
          <Styled.ExchangeBtnWrapper>
            {ExchangeData.map(Exchange => {
              return <button type="button" key={Exchange.id} />;
            })}
          </Styled.ExchangeBtnWrapper>
        </Styled.ExchangeArticle> */}
        </Styled.DataSection>
      </Styled.MainPageWrapper>
    </>
  );
}
