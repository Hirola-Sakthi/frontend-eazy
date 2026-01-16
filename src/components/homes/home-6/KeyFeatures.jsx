import { features5 as staticFeatures } from "@/data/features";
import React from "react";
import { Link } from "react-router-dom";
import { useFeatures } from "@/api/content";
import { Zap } from "lucide-react";

export default function KeyFeatures({ useBackend = true }) {
  // Fetch data from backend if useBackend is true
  const { features: backendFeatures, loading } = useFeatures('grid');

  // Transform backend data to match expected format
  const features = useBackend && backendFeatures.length > 0
    ? backendFeatures.slice(0, 6).map(f => ({
        Icon: Zap, // Default icon for backend data
        alt: f.title,
        title: f.title,
        desc: f.desc
      }))
    : staticFeatures;

  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden  scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-6">
        <div className="container">
          <div className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  Everything You Need. Nothing You Don't.
                </span>
              </div>
              <p className="fs-4 lg:fs-3 xl:fs-2 max-w-lg mx-auto m-0">
                <b className="easy-text-color">30+ powerful</b> modules working together
                <b className="easy-text-color"> — pick what you need</b> add more as you grow.
                {/* <b className="easy-text-color"> expansive customization</b> options that transform how you
                <b className="easy-text-color"> build websites</b>. */}
              </p>
            </div>
            <div
              className="panel"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div
                className="features-items row child-cols-6 lg:child-cols-2 g-2 md:g-2 col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                {features.map((feature, index) => (
                  <div key={index}>
                    <div 
                      className="features-item vstack gap-1 p-2 md:p-3 border dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-150 rounded-1-5"
                      style={{ 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', 
                        minHeight: 'auto'
                      }}
                    >
                      <div className="icon-box w-32px md:w-36px h-32px md:h-36px rounded-circle cstack easy-main-gradient dark:bg-secondary">
                        <feature.Icon
                          className="w-16px xl:w-18px"
                          width={18}
                          height={18}
                          aria-label={feature.alt}
                          style={{ stroke: 'white', color: 'white' }}
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="title fs-7 md:fs-6 fw-bold m-0">{feature.title}</h3>
                      <p className="fs-8 m-0" style={{ lineHeight: '1.4' }}>{feature.desc}</p>
                      <a href="#" className="position-cover"></a>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="features-item-more cstack gap-1 md:gap-2 flex-column">
                    <Link
                      // to={`/page-features`}
                      to={`#`}
                      className="uc-link w-40px md:w-48px lg:w-80px h-40px md:h-48px lg:h-80px rounded-circle cstack bg-secondary dark:bg-gray-800 text-primary dark:text-secondary"
                    >
                      <i className="icon icon-narrow md:icon-1 unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                    </Link>
                    <span className="fs-7 fs-6 fw-medium">
                      View all features
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}