import Header4 from "@/components/headers/Header4";
import Footer1 from "@/components/footers/Footer1";
import JobDetails from "@/components/innerpages/JobDetails";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import { useParams } from "react-router-dom";
import { jobListings } from "@/data/career";
import MetaComponent from "@/components/common/MetaComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "@/backendUrl";
const metadata = {
  title: "Career Details || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description: "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function CareerDetailsPage() {
  const { id } = useParams();
  const [jobItem, setJobItem] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Fetching jobItem:", jobItem);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/v1/website/jobs/${id}`);
        setJobItem(res.data.job);
      } catch (err) {
        console.error("Job fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) return <h2 style={{ padding: 40 }}>Loading Job Details...</h2>;
  if (!jobItem) return <h2 style={{ padding: 40 }}>Job Not Found</h2>;

  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <div id="hero_header" className="hero-header section panel overflow-hidden">
            <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
              <div className="container max-w-lg">
                <div className="section-inner panel">
                  <div className="vstack items-center text-center gap-2 lg:gap-4">
                    <span className="fs-6 fw-bold text-uppercase">We are looking for a</span>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto">{jobItem.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <JobDetails job={jobItem} />
          <CareerOpenings />
          <Feedback />
          <Brands />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
