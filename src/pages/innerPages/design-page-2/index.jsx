import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import SalesOrder from "@/components/innerpages/features/SalesOrder";
import SecurityManagement from "@/components/innerpages/features/SecurityManagement";
import SpotLight from "@/components/innerpages/features/SpotLight";
import ChoosePrivacy from "@/components/innerpages/features/ChoosePrivacy";
import MobileAppSection from "@/components/innerpages/features/MobileAppSection";


const metadata = {
  title:
    "Career || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function DesignPage2() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <SalesOrder/>
          <SecurityManagement/>
          <SpotLight/>
          <ChoosePrivacy/>
          <MobileAppSection/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
