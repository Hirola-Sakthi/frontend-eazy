import { featureItems2 } from "@/data/features";
import { useFeatures } from "@/api/content";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeFeatures({ useBackend = true }) {
  const { features: apiFeatures, loading } = useFeatures('panel');

  // Map API features to match the expected format, with fallback to static data
  const featureItems = useBackend && apiFeatures.length > 0
    ? apiFeatures.map((f, idx) => ({
        iconSrc: f.icon || f.lightIcon || featureItems2[idx]?.iconSrc || '/assets/images/icons/check.svg',
        alt: f.title,
        title: f.title,
        description: f.description,
        bgClass: featureItems2[idx]?.bgClass || '',
        order: featureItems2[idx]?.order || ''
      }))
    : featureItems2;

  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-6">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  Benefits
                </span>
              </div>
              <h2 className="h3 sm:h2 lg:h1 xl:display-6 m-0">
                Why Businesses Choose<br/> The Eazy
              </h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
                We're not just another software. We're your growth partner.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-0 col-match"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {featureItems.map((item, index) => (
                <div key={index} className={item.order}>
                  <div
                    className={`features-item h-100px w-350px vstack justify-between gap-3 xl:gap-4 p-2 xl:p-3 rounded-1-5 ${
                      item.bgClass || ""
                    }`}
                  >
                    <div className="icon-box w-48px h-48px rounded-1-5 cstack easy-main-gradient">
                      <img
                        className="w-20px xl:w-24px text-white image-filter-white"
                        src={item.iconSrc}
                        width={24}
                        height={24}
                        alt={item.alt}
                        data-uc-svg=""
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-1">
                        <h3 className="title h5 xl:h4 m-0">{item.title}</h3>
                        <p className="desc fs-7 xl:fs-6 text-opacity-70">
                          {item.description}
                        </p>
                        <Link
                          className="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1"
                          to={`#`}
                        >
                          <span>Learn more</span>
                          <i className="position-relative icon unicon-arrow-right fw-bold rtl:rotate-180 translate-y-px" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
