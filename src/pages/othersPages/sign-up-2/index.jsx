import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Signup2 from "@/components/otherPages/Signup2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Signup 2 || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function SignupPage2() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap mt-4">
          {/* <Breadcumb /> */}
          <Signup2 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
