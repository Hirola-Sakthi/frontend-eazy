import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import BusinessScroll from "@/components/innerpages/features/Business-Scroll";
import ConnectConquer from "@/components/innerpages/features/ConnectConquer";
import HrSoftware from "@/components/innerpages/features/HrSoftware";
import DigitalAdoption from "@/components/innerpages/features/digital-adoption";
import WorkForce from "@/components/innerpages/features/WorkForce";


const metadata = {
  title:
    "Career || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function DesignPage3() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <BusinessScroll/>
          <ConnectConquer/>
          <HrSoftware/>
          <DigitalAdoption/>
          <WorkForce/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
