import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import PrivacyPartner from "@/components/innerpages/features/PrivacyPartner";
import RevenueManagement from "@/components/innerpages/features/RevenueManagement";
import Membership from "@/components/innerpages/features/Membership";
import InstantPayments from "@/components/innerpages/features/InstantPayments";
import SaveMoney from "@/components/innerpages/features/SaveMoney";


const metadata = {
  title:
    "Career || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function DesignPage6() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <PrivacyPartner/>
          <RevenueManagement/>
          <Membership/>
          <InstantPayments/>
          <SaveMoney/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
