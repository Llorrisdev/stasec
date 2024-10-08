import Image from "next/image";
import Header from "@/components/header/header";
import HeadVector from "@/components/icons/head-vector";
import Footer from "@/components/footer/footer";
import Features from "@/components/features/features";
import { homeFeatures, goalsCard } from "@/data/home/cardContent";
import Content from "@/components/content/content";
import {
  homeContent1,
  homeContent2,
  homeContent3,
  homeContent4,
} from "@/data/home/homeContent";
import "@/components/features/features.css";
import Time from "@/components/icons/time";
import Threat from "@/components/icons/threat";
import Customize from "@/components/icons/customize";
import Training from "@/components/icons/training";
import Testimonial from "@/components/testimonial/testimonial";
import iconMappings from "@/components/icons/iconMappings";
import GoalsCard from "@/components/goals-card/goals-card";
import Banner from "@/components/banner-homepage/banner";
import FooterContainer from "@/components/footer/footer-container";
import TranslationsProvider from "@/components/TranslationsProvider";
import translate from "../i18n";
import Testimonial_Sec from "@/components/testimonial/testimonial-sec";

const page = ["home", "component"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await translate(locale, page);

  return (
    <TranslationsProvider page={page} locale={locale} resources={resources}>
      <section className="relative overflow-x-hidden text-white">
        <Banner />
        <Image
          className="absolute hidden line-vector-1 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-1">
          <Features {...homeFeatures} />
        </div>
        <Image
          className="absolute hidden line-vector-2 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-2">
          <Content {...homeContent1} index={0} />
        </div>
        <Image
          className="absolute hidden line-vector-3 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-3">
          <Content {...homeContent2} index={1} />
        </div>
        <Image
          className="absolute hidden line-vector-4 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-4">
          <Content {...homeContent3} index={2} />
        </div>
        <Image
          className="absolute hidden line-vector-5 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-5">
          <Content {...homeContent4} index={3} />
        </div>
        <Image
          className="absolute hidden line-vector-6 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="my-8 sm:my-16">
          <div className="flex flex-col items-center px-16">
            <div className="flex flex-col items-center w-full space-y-4 text-center">
              <div className="text-[24px] text-[#1A57FF]">
                {t("goals.blueText")}
              </div>
              <div
                className="title-text"
                dangerouslySetInnerHTML={{ __html: t("goals.title") }}
              ></div>
              <div
                className="text-[18px]"
                dangerouslySetInnerHTML={{ __html: t("goals.content") }}
              ></div>
            </div>

            <GoalsCard goalsCard={goalsCard} />
          </div>
        </div>

        <div className="flex items-center mt-64 content-bg-7">
          <div className="flex flex-col items-center gap-20 px-3 lg:flex-row sm:px-20">
            <figure className="">
              <Image
                src="/feature-point.png"
                width={1200}
                height={800}
                alt="feature-point"
                className="rounded-xl w-full object-cover lg:w-[1200px] h-[800px]"
              />
            </figure>
            <div className="flex flex-col ">
              <p className="text-[24px] text-center md:text-start text-[#1A57FF] font-semibold pb-[8px]">
                {t("point.blueText")}
              </p>
              <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl pb-[24px] text-center md:text-start ">
                {t("point.title")}
              </h2>
              <p className="sm:text-lg text-md">{t("point.content")}</p>
              <div
                className="pt-[72px] grid md:grid-cols-2 gap-12"
                style={{ lineHeight: "32px" }}
              >
                <div className="flex items-center space-x-[16px]">
                  <div className="card px-[20px] py-[20px] flex items-center justify-center">
                    <Time width={40} height={34} />
                  </div>
                  <p className="text-sm md:text-2xl sm:text-xl">
                    {t("point.item1")}
                  </p>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <div className="card px-[20px] py-[20px] flex items-center justify-center">
                    <Threat width={40} height={40} />
                  </div>
                  <p className="text-sm md:text-2xl sm:text-xl">
                    {t("point.item2")}
                  </p>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <div className="card px-[20px] py-[20px] flex items-center justify-center">
                    <Customize width={40} height={40} />
                  </div>
                  <p className="text-sm md:text-2xl sm:text-xl">
                    {t("point.item3")}
                  </p>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <div className="card px-[20px] py-[20px] flex items-center justify-center">
                    <Training width={40} height={40} />
                  </div>
                  <p className="text-sm md:text-2xl sm:text-xl">
                    {t("point.item4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TESTI */}
        <div className="flex flex-col items-center justify-center content-bg-8" id="testimonial">
          <Testimonial />
          <Testimonial_Sec />
        </div>

        <FooterContainer />
      </section>
    </TranslationsProvider>
  );
}
