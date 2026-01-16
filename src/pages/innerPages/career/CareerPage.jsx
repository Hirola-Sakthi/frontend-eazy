import Header4 from "@/components/headers/Header4";
import Footer1 from "@/components/footers/Footer1";
// import CareerPortal from "@/pages/innerpages/CareerPortal";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import MetaComponent from "@/components/common/MetaComponent";
import CareerPortal from "./Career";

const metadata = {
  title:
    "Career Openings || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Discover exciting career opportunities and join our team. Browse open positions and apply today.",
};

export default function CareerPortalPage() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <CareerPortal />
          <Feedback />
          <Brands />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
