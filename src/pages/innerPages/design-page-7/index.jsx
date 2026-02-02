import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Possibilities from "@/components/innerpages/features/Possibilities";
import Decodable from "@/components/innerpages/features/Decodable";
import FinancialSolution from "@/components/innerpages/features/FinancialSolutions";
import PowerfulNetwork from "@/components/innerpages/features/PowerfulNetwork";
import HumanAgents from "@/components/innerpages/features/HumanAgents";

const metadata = {
  title:
    "Career || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function DesignPage7() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <Possibilities/>
          <Decodable/>
          <FinancialSolution/>
          <PowerfulNetwork/>
          <HumanAgents/>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
