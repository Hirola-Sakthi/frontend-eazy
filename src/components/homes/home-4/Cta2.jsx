import { openContactModal } from "@/utlis/toggleContactModal";
import { Link } from "react-router-dom";

export default function Cta2() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel pt-4 sm:pt-6 xl:pt-6">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-narrow max-w-400px lg:max-w-700px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 lg:h3 m-0">
               Join 500+ Businesses Running on The Eazy
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                No credit card required. Full access for 14 days. Setup in under 10 minutes.
              </p>
              <div className="cstack sm:hstack justify-center gap-1 lg:gap-2 mt-2 lg:mt-4">
                <a
                  // onClick={openContactModal}
                  className="btn btn-md w-fit rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs"
                  data-uc-toggle=""
                >
                  <i className="icon-1 unicon-play-outline fw-medium text-white" />
                  <span className="text-white" style={{lineHeight:"20px",whiteSpace:"nowrap"}}>Start Free Trial</span>
                </a>
                <Link
                  to={`#`}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs w-fit"
                  style={{lineHeight:"20px"}} >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
