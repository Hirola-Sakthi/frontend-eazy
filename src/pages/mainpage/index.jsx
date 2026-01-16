import Blogs from "@/components/homes/home-6/Blogs";
import Brands from "@/components/homes/home-6/Brands";
import Elements from "@/components/homes/home-6/Elements";
import Faq from "@/components/homes/home-6/Faq";
// import Features from "@/components/homes/home-6/Features";
import Hero from "@/components/homes/home-6/Hero";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";
import Testimonials from "@/components/homes/home-6/Testimonials";
import VideoComponent from "@/components/homes/home-6/VideoComponent";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
import HomeFeatures from "@/components/homes/home/HomeFeatures";
import HomeThreeFeatures from "@/components/homes/home/HomeThreeFeatures";
import HomeOneFeatures from "@/components/homes/home/HomeOneFeatures";
import Header4 from "@/components/headers/Header4";
import Footer1 from "@/components/footers/Footer1";
import Cta2 from "@/components/homes/home-4/Cta2";
import BannerBelowSection from "@/components/homes/home-6/BannerBelowSection";
import MapCardSection from "@/components/homes/home-6/MapCardSection";
import IntegrationSection from "@/components/homes/home-6/IntegratedSection";
import AiSection from "@/components/homes/home-6/AiSection";

const metadata = {
  title:
    "Home 6 || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function Mainpage() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div
        style={{ overflow: "clip" }}
        className="uni-body page-wrapper panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 home-6 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready"
      >
        <Header4 />
        <div id="wrapper" className="wrap">
          <Hero />
          <BannerBelowSection />
          <MapCardSection />
          <IntegrationSection />
          <HomeFeatures />
          <HomeThreeFeatures />
          <HomeOneFeatures />
          {/* <Features /> */}
          <AiSection />
          <Brands />
          <VideoComponent />
          <KeyFeatures />
          <Elements />
          <Testimonials />
          <Faq />
          {/* <Blogs /> */}
          <div className="border-top"></div>
          <Cta2 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
