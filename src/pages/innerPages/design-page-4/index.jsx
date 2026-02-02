import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
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
export default function DesignPage4() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <EazyGrow/>
          <SmarterBanner/>
          <AutomatedShare/>
          <ToDoApp/>
          <OnePlatform/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
