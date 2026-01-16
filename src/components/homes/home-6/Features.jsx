import React from "react";
import { useFeatures } from "@/api/content";

// Default/fallback feature content
const defaultFeatures = [
  {
    title: "Drag-and-Drop Interface",
    description: "Intuitive interface Drag-and-Drop for building pages by dragging and dropping elements.",
    image: "/assets/images/template/home-06-main-app.png",
    buttonText: "Try it now",
    buttonLink: "#",
    variant: "large"
  },
  {
    title: "Dashboard Components",
    description: "Unlock your productivity potential with our intuitive and powerful Dashboard UI Components.",
    image: "/assets/images/template/home-06-dashboard-components.png",
    buttonText: "Let's find out",
    buttonLink: "#",
    variant: "gradient"
  },
  {
    title: "UI Components",
    description: "Easy-to-use and powerful page builder, your gateway to intuitive tools and expansive customization options that transform how you build websites.",
    image: "/assets/images/template/home-06-components.png",
    buttonText: "Let's find out",
    buttonLink: "#",
    variant: "gradient"
  },
  {
    title: "Builder Tools",
    description: "Unleash your creativity with our builder's intuitive UI Components, experience the difference.",
    image: "/assets/images/template/home-06-builder-tools.png",
    buttonText: "",
    buttonLink: "",
    variant: "large-bottom"
  }
];

const defaultSectionContent = {
  badge: "Main features",
  title: "No coding skills required.",
  titleHighlight: "coding skills",
  description: "Unleash your creativity with our builder's powerful features and intuitive interface, experience the difference."
};

export default function Features({ useBackend = true }) {
  const { features: apiFeatures, loading, error } = useFeatures('main');

  // Use API features if available, otherwise use defaults
  const features = useBackend && apiFeatures.length > 0
    ? apiFeatures.map((f, idx) => ({
        title: f.title,
        description: f.description,
        image: f.image || defaultFeatures[idx]?.image || '',
        buttonText: f.link?.text || defaultFeatures[idx]?.buttonText || '',
        buttonLink: f.link?.href || defaultFeatures[idx]?.buttonLink || '#',
        variant: idx === 0 ? 'large' : idx === 3 ? 'large-bottom' : 'gradient'
      }))
    : defaultFeatures;

  // Get section header content from first feature with category or use defaults
  const sectionContent = defaultSectionContent;

  return (
    <div id="features" className="features section panel scrollSpysection">
      <div className="section-outer panel pt-6 lg:pt-6 xl:pt-6">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  {sectionContent.badge}
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                No{" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
                </span>{" "}
                required.
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                {sectionContent.description}
              </p>
            </div>
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              {/* Feature 1 - Large Card */}
              {features[0] && (
                <div className="lg:col-7">
                  <div
                    className="panel overflow-hidden border text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                    data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                  >
                    <div
                      className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        {features[0].description}
                      </p>
                      {features[0].buttonText && (
                        <a href={features[0].buttonLink} className="btn btn-sm btn-primary px-2 mt-2">
                          <span>{features[0].buttonText}</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                        </a>
                      )}
                    </div>
                    <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6">
                      <img
                        className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                        alt={features[0].title}
                        src={features[0].image}
                        width="1280"
                        height="837"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Feature 2 - Gradient Card */}
              {features[1] && (
                <div>
                  <div
                    className="panel vstack items-start overflow-hidden easy-main-gradient rounded-2 lg:rounded-3 uc-dark"
                    data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                  >
                    <div
                      className="position-cover opacity-70 bg-cover"
                      style={{ backgroundPosition: "50% 85%" }}
                      data-src="/assets/images/template/feature-06-bg-masked.png"
                      data-uc-img=""
                    />
                    <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                    <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                    <div className="panel p-3">
                      <img
                        className="rounded-bottom-1-5 lg:rounded-bottom-3"
                        alt={features[1].title}
                        src={features[1].image}
                        width="664"
                        height="496"
                      />
                    </div>
                    <div
                      className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <div className="content vstack items-start gap-2">
                        <h4 className="h4 m-0">{features[1].title}</h4>
                        <p className="fs-6 lg:fs-5 dark:text-white">
                          {features[1].description}
                        </p>
                      </div>
                      {features[1].buttonText && (
                        <a
                          href={features[1].buttonLink}
                          className="btn btn-sm btn-secondary text-primary px-2 mt-2"
                        >
                          <span>{features[1].buttonText}</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Feature 3 - Gradient Card */}
              {features[2] && (
                <div>
                  <div
                    className="panel vstack items-start overflow-hidden easy-main-gradient rounded-2 lg:rounded-3 uc-dark"
                    data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                  >
                    <div
                      className="position-cover opacity-70 bg-cover"
                      style={{ backgroundPosition: "50% 85%" }}
                      data-src="/assets/images/template/feature-06-bg-masked-2.png"
                      data-uc-img=""
                    />
                    <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                    <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                    <div className="panel px-3 lg:px-4 xl:px-6">
                      <img
                        className="rounded-bottom-1-5 border border-top-0"
                        alt={features[2].title}
                        src={features[2].image}
                        width="800"
                        height="620"
                      />
                    </div>
                    <div
                      className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <div className="content vstack items-start gap-2">
                        <h4 className="h4 m-0">{features[2].title}</h4>
                        <p className="fs-6 lg:fs-5 dark:text-white">
                          {features[2].description}
                        </p>
                      </div>
                      {features[2].buttonText && (
                        <a
                          href={features[2].buttonLink}
                          className="btn btn-sm btn-secondary text-primary px-2 mt-2"
                        >
                          <span>{features[2].buttonText}</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Feature 4 - Large Bottom Card */}
              {features[3] && (
                <div className="lg:col-7">
                  <div
                    className="panel vstack items-start overflow-hidden border text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                    data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                  >
                    <div
                      className="panel vstack items-center gap-2 p-3 lg:p-4 xl:p-6"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <h4 className="h4 m-0">{features[3].title}</h4>
                      <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                        {features[3].description}
                      </p>
                    </div>
                    <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                      <img
                        alt={features[3].title}
                        src={features[3].image}
                        width="1280"
                        height="800"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
