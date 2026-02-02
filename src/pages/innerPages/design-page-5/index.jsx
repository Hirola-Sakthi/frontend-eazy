import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Compliant from "@/components/innerpages/features/Compliant";
import SmartDecision from "@/components/innerpages/features/SmartDecision";
import FinanceManagement from "@/components/innerpages/features/FinanceManagement";
import Capabilities from "@/components/innerpages/features/Capabilities";
import MarqueePattern from "@/components/innerpages/features/MarqueePattern";


const metadata = {
  title:
    "Career || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function DesignPage5() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <Compliant/>
          <SmartDecision/>
          <FinanceManagement/>
          <Capabilities/>
          <MarqueePattern/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
