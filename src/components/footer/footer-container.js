import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";

const FooterContainer = () => {
  return (
    <div className="relative z-0">
      <div className="flex items-center justify-center h-[720px] mt-8">
        <div
          className="absolute top-0 bottom-0 left-0 bg-right-top bg-no-repeat bg-cover right-[-560px] md:right-0 content-bg-9 md:bg-70"
          style={{
            backgroundImage: "url(/contact-bg.png)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center p-6 md:p-20 sm:p-10">
          <div className="text-3xl md:text-[48px] text-center font-bold">
            Fortify Your Digital Future with Our Security Solution
          </div>
          <p className="pt-4 text-base text-center fpoint-text md:text-lg">
            Ensures a proactive defense against evolving threats, providing
            peace of mind for your digital landscape.
          </p>
          <Link href={"/contact"} className="md:w-[230px] px-4 py-2.5 md:px-[36px] md:py-[20px] flex items-center justify-center rounded-[8px] bg-[#1A57FF] mt-[50px]">
            <div className="text-lg md:text-2xl">Get In Touch</div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FooterContainer;
