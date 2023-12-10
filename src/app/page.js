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
import "../components/features/features.css";
import Time from "@/components/icons/time";
import Threat from "@/components/icons/threat";
import Customize from "@/components/icons/customize";
import Training from "@/components/icons/training";
import Testimonial from "@/components/testimonial/testimonial";
import iconMappings from "@/components/icons/iconMappings";
import GoalsCard from "@/components/goals-card/goals-card";
import Banner from "@/components/banner-homepage/banner";
import FooterContainer from "@/components/footer/footer-container";

export default function Home() {
 
 
  return (
    <section className="text-white">
  
    <Banner />
     <div className="flex items-center content-bg-1">
        <Features {...homeFeatures} />
      </div>
      <div className="flex items-center content-bg-2">
        <Content {...homeContent1} />
      </div>
      <div className="flex items-center content-bg-3">
        <Content {...homeContent2} />
      </div>
      <div className="flex items-center content-bg-4">
        <Content {...homeContent3} />
      </div>
      <div className="flex items-center content-bg-5">
        <Content {...homeContent4} />
      </div>
   

      <div className="my-8 sm:my-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-4 w-full text-center">
            <div className="text-[24px] text-[#1A57FF]">
              {goalsCard.blueText}
            </div>
            <div className="title-text" dangerouslySetInnerHTML={{ __html: goalsCard.title }}></div>
            <div className="text-[18px]">{goalsCard.content}</div>
          </div>
          
         <GoalsCard goalsCard={goalsCard} />
        </div>
      </div>
      
      <div className="flex items-center content-bg-7">
        <div className="flex flex-col lg:flex-row items-center px-3 sm:px-20 gap-20">
          <figure className="">
            <Image
              src="/feature-point.png"
              width={1200}
              height={1200}
              alt="feature-point"
              className="rounded-xl w-full object-cover lg:w-[1200px]"
            />
          </figure>
          <div className="flex flex-col ">
            <p className="text-[24px] text-center md:text-start text-[#1A57FF] font-semibold pb-[8px]">
              Feature Point
            </p>
            <h2
              className="font-semibold text-4xl md:text-5xl lg:text-6xl pb-[24px] text-center md:text-start "
            >
              How Can We Help You Increase Your Cybersecurity System?
            </h2>
            <p className="sm:text-lg text-md">
              We proactively identify and neutralize potential threats, ensuring
              a robust defense against evolving cyber threats. Trust us to
              enhance your cybersecurity and secure your digital environment.
            </p>
            <div
              className="pt-[72px] grid md:grid-cols-2 gap-12"
              style={{ lineHeight: "32px" }}
            >
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Time width={40} height={34} />
                </div>
                <p className="md:text-2xl sm:text-xl text-sm">
                  Real-Time Incident Response
                </p>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Threat width={40} height={40} />
                </div>
                <p className="md:text-2xl sm:text-xl text-sm">
                  Spot Weaknesses, Boots Security
                </p>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Customize width={40} height={40} />
                </div>
                <p className="md:text-2xl sm:text-xl text-sm">
                  Improve Code Quality
                </p>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Training width={40} height={40} />
                </div>
                <p className="md:text-2xl sm:text-xl text-sm">
                  AI-Powered Assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* TESTI */}
      <div className="flex flex-col items-center justify-center content-bg-8">
        <Testimonial />
        <div className="flex flex-col items-center px-10">
          <div className="text-[24px]">Our Trusted Partners</div>
          <div className="flex sm:flex-row flex-col flex-wrap gap-4 pt-6 sm:pt-0 items-center">
            <div>
              <Image
                src="/asgardia.png"
                width={160}
                height={38}
                alt="Argardia Logo"
              />
            </div>
            <div>
              <Image
                src="/amara.png"
                width={221}
                height={38}
                alt="Argardia Logo"
              />
            </div>
            <div>
              <Image
                src="/aven.png"
                width={126}
                height={38}
                alt="Argardia Logo"
              />
            </div>
            <div>
              <Image
                src="/circle.png"
                width={135}
                height={38}
                alt="Argardia Logo"
              />
            </div>
            <div>
              <Image
                src="/ideaa.png"
                width={111}
                height={38}
                alt="Argardia Logo"
              />
            </div>
          </div>
        </div>
      </div>

     <FooterContainer />
     
    </section>
  );
}
