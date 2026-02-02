import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import Blogs from "@/components/homes/home-2/Blogs";
import MetaComponent from "@/components/common/MetaComponent";
import Career from "@/components/innerpages/features/Career";
import AutomateSmarter from "@/components/innerpages/features/AutomateSmarter";

const metadata = {
  title:
    "Career || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function CareerPage() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          {/* <CareerHero /> */}
          <Career/>
          <AutomateSmarter/>
          <CareerBenefits />
          <CareerOpenings />
          <Feedback />
          <Brands />
          <Blogs />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
