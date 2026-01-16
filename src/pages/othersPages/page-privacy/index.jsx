import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Privacy from "@/components/otherPages/Privacy";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Privacy Policy – The Eazy Cloud Software",
  description:
    "Understand how The Eazy collects, uses, and protects your data with secure, transparent privacy practices.",
};
export default function PrivacyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap mt-4">
          {/* <Breadcumb /> */}
          <Privacy />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
