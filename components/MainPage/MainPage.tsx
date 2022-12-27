import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as Styled from "./MainPage.style";
import DataView from "./DataView";
import BannerStarbucks from "../../public/images/BannerStarbucks.png";
import BannerTitle from "../../public/images/BannerTitle.png";
// import Input from "../Input/Input";
// import searchIcon from "../../public/images/search.svg";

import {
  MajorsData,
  CultureData,
  CategoryData,
  // ExchangeData,
} from "./DataJson";
import Header from "../Header/Header";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function MainPage() {
  const MajorTitle = "학과별 전공 자료";
  const MajorDescription = "학과별 자료를 모아놨어요!";

  const CultureTitle = "교양대학 자료";
  const CultureDescription = "교양대학 자료들만 모아놨어요!";

  const CategoryTitle = "카테고리별 자료";
  const CategoryDescription = "다양한 자료를 모아놨어요!";

  // const ExchangeTitle = "신청수가 많은 자료";

  return (
    <>
      <Header />

      <Styled.MainPageWrapper>
        <Styled.TitleInputSection>
          <Styled.MainTitle>
            안양대 학생들을 위한 자료 공유 플랫폼!
          </Styled.MainTitle>

          {/* <Styled.InputWrapper>
            <Input width="101rem" padding="3rem 2.5rem" />
            <button type="button">
              <Image src={searchIcon} />
            </button>
          </Styled.InputWrapper> */}
        </Styled.TitleInputSection>

        <Styled.BannerSection>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <Image src={BannerTitle} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={BannerStarbucks} />
            </SwiperSlide>
          </Swiper>
        </Styled.BannerSection>

        <Styled.DataSection>
          <Styled.MajorArticle>
            <DataView title={MajorTitle} description={MajorDescription} />

            <Styled.ButtonWrapper>
              {MajorsData.map(Major => {
                return (
                  <Link
                    key={Major.id}
                    href={`/article/department?value=${Major.description}`}
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
              {CultureData.map(Culture => {
                return (
                  <Link key={Culture.id} href="/article/culture">
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
              {CategoryData.map(Category => {
                return (
                  <Link key={Category.id} href="/article/category">
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
