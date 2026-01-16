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
import SalesOrder from "@/components/innerpages/features/SalesOrder";
import SecurityManagement from "@/components/innerpages/features/SecurityManagement";
import SpotLight from "@/components/innerpages/features/SpotLight";
import ChoosePrivacy from "@/components/innerpages/features/ChoosePrivacy";
import MobileAppSection from "@/components/innerpages/features/MobileAppSection";
import BusinessScroll from "@/components/innerpages/features/Business-Scroll";
import ConnectConquer from "@/components/innerpages/features/ConnectConquer";
import HrSoftware from "@/components/innerpages/features/HrSoftware";
import DigitalAdoption from "@/components/innerpages/features/digital-adoption";
import WorkForce from "@/components/innerpages/features/WorkForce";
import EazyGrow from "@/components/innerpages/features/EazyGrow";
import SmarterBanner from "@/components/innerpages/features/SmarterBanner";
import AutomatedShare from "@/components/innerpages/features/AutomatedShare";
import ToDoApp from "@/components/innerpages/features/ToDoApp";
import OnePlatform from "@/components/innerpages/features/OnePlatform";
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
          <SalesOrder/>
          <SecurityManagement/>
          <SpotLight/>
          <ChoosePrivacy/>
          <MobileAppSection/>
          <BusinessScroll/>
          <ConnectConquer/>
          <HrSoftware/>
          <DigitalAdoption/>
          <WorkForce/>
          <EazyGrow/>
          <SmarterBanner/>
          <AutomatedShare/>
          <ToDoApp/>
          <OnePlatform/>
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
