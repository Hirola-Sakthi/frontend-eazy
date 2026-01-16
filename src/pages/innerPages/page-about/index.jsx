import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import OurStory from "@/components/innerpages/OurStory";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/innerpages/Cta";
import MetaComponent from "@/components/common/MetaComponent";
import AboutUs from "@/components/innerpages/About-Us";
import WhatWeBelieve from "@/components/innerpages/WhatWeBelieve";
import Cta2 from "@/components/homes/home-4/Cta2";
const metadata = {
  title:
    "About The Eazy – Simplifying Business Management",
  description:
    "Learn how The Eazy was built to simplify business operations with a unified, intelligent, and compliance-ready cloud platform.",
};
export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div
        className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
        style={{ overflow: "clip" }}
      >
        <Header4 />
        <div id="wrapper" className="wrap">
          {/* <About /> */}
          <AboutUs />
          <OurStory />
          <WhatWeBelieve />
          {/* <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >
                    <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                      <Brands />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <About2 />
          <AboutValues />
          {/* <Feedback /> */}
          {/* <Timeline /> */}
          {/* <Team />
          <Cta /> */}
          <div className="border-top"></div>
          <Cta2/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
