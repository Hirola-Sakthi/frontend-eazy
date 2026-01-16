import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
import Brands from "@/components/common/Brands2";
import Blogs from "@/components/homes/home-2/Blogs";
import MetaComponent from "@/components/common/MetaComponent";
import ContactMapSection from "@/components/innerpages/ContactMapSection";
import Cta2 from "@/components/homes/home-4/Cta2";
const metadata = {
  title:
    "Contact The Eazy – Talk to Our Team",
  description:
    "Get in touch with The Eazy team for demos, support, or queries. We’re here to help you simplify business operations.",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
          {/* <ContactMapSection/> */}
          <Faq />
          {/* <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-8 sm:pb-9 xl:pb-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div> */}
          {/* <Blogs /> */}
          <div className="border-top"></div>
          <Cta2 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
