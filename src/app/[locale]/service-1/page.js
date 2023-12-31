import Image from "next/image";
import Header from "@/components/header/header";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import { serviceFeatures1, keyBenefits } from "@/data/service/serviceFeatures";
import { workProcess1 } from "@/data/service/workProcess";
import iconMappings from "@/components/icons/iconMappings";
import BannerService1 from "@/components/banner-homepage/banner-service-1";
import FooterContainer from "@/components/footer/footer-container";
import TranslationsProvider from "@/components/TranslationsProvider";
import translate from "@/app/i18n";

const page = ["service-1", "component"];

export default async function Service1({ params: { locale } }) {
  const { t, resources } = await translate(locale, page);

  return (
    <TranslationsProvider page={page} locale={locale} resources={resources}>
      <section className="relative overflow-x-hidden">
        <BannerService1 />

        <div className="flex items-center justify-center md:service1-bg-1 ">
          <Features {...serviceFeatures1} withContent={false} />
        </div>

        <div className="flex flex-col items-center w-full px-4 my-20 md:service1-bg-2 md:px-12">
          <div className="flex flex-col">
            <div className="grid items-center grid-cols-3 gap-6">
              <div className="flex flex-col space-y-[24px] col-span-3 md:col-span-2">
                <h4
                  className="text-2xl font-bold fpoint-text sm:text-4xl md:text-7xl"
                  dangerouslySetInnerHTML={{ __html: t("benefit.title") }}
                ></h4>

                <p
                  className="text-sm sm:text-[18px] leading-6"
                  dangerouslySetInnerHTML={{ __html: t("benefit.content") }}
                ></p>
              </div>

              <div className="col-span-3 md:col-span-1 h-[350px] md:h-[500px]">
                <Image
                  src={"/service1-content.png"}
                  width={1000}
                  height={1000}
                  alt="service1-content"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
          <Image
            className="absolute hidden line-vector-1 lg:block"
            src="/line-right.svg"
            width={480}
            height={480}
            alt="head-vector"
          />
          <div>
            <div className="flex flex-col items-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 w-full gap-4 sm:gap-5 md:gap-12 pt-[70px] flex-1 ">
                {keyBenefits.cards.map((card, index) => {
                  const CardIcon = iconMappings[card.cardIcon];
                  return (
                    <div className="card-container" key={index}>
                      <div className="card flex flex-col p-[24px] space-y-[10px] h-[320px]  md:h-[360px]">
                        <div className="white-circle w-fit">
                          <CardIcon width={48} height={48} color={"#1A57FF"} />
                        </div>
                        <h4 className="text-xl md:text-[24px] font-semibold">
                          {t(`benefit.cards.${index}.title`)}
                        </h4>
                        <p className="text-[14px]">
                          {t(`benefit.cards.${index}.content`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute hidden line-vector-2 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "2400px" }}
        />
        <div className="flex flex-wrap items-center mt-0 md:mt-64 md:service2-bg-3">
          <Features {...workProcess1} translateKey="process" />
        </div>
        <Image
          className="absolute hidden line-vector-3 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "3200px" }}
        />
        <FooterContainer />
      </section>
    </TranslationsProvider>
  );
}
