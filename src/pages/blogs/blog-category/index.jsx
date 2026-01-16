import Header4 from "@/components/headers/Header4";

import Footer1 from "@/components/footers/Footer1";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs3 from "@/components/blog/Blogs3";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog Category || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function BlogCategoryPage() {
  let params = useParams();
  const category = params.category.split("%20").join(" ");
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap mt-4">
          {/* <BreadCumb category={category} /> */}
          <Blogs3 category={category} />
          <Newsletter />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
