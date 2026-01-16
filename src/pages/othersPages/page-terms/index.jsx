import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Terms from "@/components/otherPages/Terms";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Terms & Conditions – The Eazy Cloud Platform",
  description:
    "Read The Eazy’s terms and conditions covering platform usage, subscriptions, data protection, and service policies",
};
export default function TermsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap mt-4">
          {/* <Breadcumb /> */}
          <Terms />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
