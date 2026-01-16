import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs5 from "@/components/blog/Blogs5";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog 4 Cols || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function Blog4ColsPage() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap mt-4">
          {/* <BreadCumb category={"Blog 4 Cols"} /> */}
          <Blogs5 />
          <Newsletter />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
