import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/home-6/Hero";
import React from "react";

import { useHeroes } from "@/api/content";
import { Link } from "react-router-dom";

import SecondRowImg1 from "../../../public/assets/images/common/second-row-img-1.svg";
import SecondRowImg2 from "../../../public/assets/images/common/second-row-img-2.svg";
import SecondRowImg3 from "../../../public/assets/images/common/second-row-img-3.svg";
import SecondRowImg4 from "../../../public/assets/images/common/second-row-img-4.svg";
import SecondRowImg5 from "../../../public/assets/images/common/second-row-img-5.svg";

import FirstRowImg1 from "../../../public/assets/images/common/first-row-img-1.svg";
import FirstRowImg2 from "../../../public/assets/images/common/first-row-img-2.svg";
import FirstRowImg3 from "../../../public/assets/images/common/first-row-img-3.svg";
import FirstRowImg4 from "../../../public/assets/images/common/first-row-img-4.svg";
import FirstRowImg5 from "../../../public/assets/images/common/first-row-img-5.svg";
import AnimatedIntegrationSVG from "../../components/homes/home-6/AnimatedSvg";

const defaultHero = {
  title: "Best Digital Marketing Services in",
  titleHighlight: "Bangalore",
  // titleSuffix: "now or never!",
  // subtitle: "Beta Available Now",
  description:
    "Easy-to-use and powerful page builder, your gateway to intuitive tools and expansive customization options that transform how you build websites.",
  primaryButtonText: "Get In Touch",
  primaryButtonLink: "/page-pricing",
  footerText: "No credit cards required - 14 days free trial.",
};

const services = ({ useBackend = true }) => {
  const { heroes, loading, error } = useHeroes("home");

  const heroData = useBackend && heroes.length > 0 ? heroes[0] : null;

  // Parse title to extract highlight if present (format: "text {highlight} more text")
  const parseTitle = (title) => {
    if (!title)
      return {
        before: defaultHero?.title,
        highlight: defaultHero?.titleHighlight,
        after: defaultHero?.titleSuffix,
      };

    const match = title.match(/^(.*?)\{([^}]+)\}(.*)$/);
    if (match) {
      return {
        before: match[1].trim(),
        highlight: match[2].trim(),
        after: match[3].trim(),
      };
    }
    return { before: title, highlight: "", after: "" };
  };

  const titleParts = heroData
    ? parseTitle(heroData?.title)
    : {
        before: defaultHero?.title,
        highlight: defaultHero?.titleHighlight,
        after: defaultHero?.titleSuffix,
      };

  const subtitle = heroData?.subtitle || defaultHero?.subtitle;
  const description = heroData?.description || defaultHero?.description;
  const primaryButtonText =
    heroData?.primaryButtonText || defaultHero?.primaryButtonText;
  const primaryButtonLink =
    heroData?.primaryButtonLink || defaultHero?.primaryButtonLink;

  return (
    <div
      style={{ overflow: "clip" }}
      className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
    >
      <Header4 />
      <div id="wrapper" className="wrap mt-4">
        <div className="integration-row">
            
          <div className="integration-col image-wrapper">
            <div className="svg-wrapper">
              <AnimatedIntegrationSVG />
            </div>

            <img
              src={FirstRowImg1}
              className="small-icon first-small1"
              alt=""
            />
            <img
              src={FirstRowImg2}
              className="small-icon first-small2"
              alt=""
            />
            <img
              src={FirstRowImg3}
              className="small-icon first-small3"
              alt=""
            />
            <img
              src={FirstRowImg4}
              className="small-icon first-small4"
              alt=""
            />
            <img
              src={FirstRowImg5}
              className="small-icon first-small5"
              alt=""
            />
          </div>

          <div
            id="overview"
            className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 scrollSpysection"
          >
            <div
              className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
              style={{ top: "0%" }}
            />
            <div
              className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
              style={{ top: "0%" }}
            />
            <div
              className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
              style={{ top: "0%" }}
            />
            <div className="section-outer panel pt-9 xl:pt-10">
              <div className="container xl:max-w-xl">
                <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
                  <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
                    <div>
                      <div
                        className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                        data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                      >
                        <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-black">
                          {titleParts.before}
                          {titleParts.highlight && (
                            <>
                              {" "}
                              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                {titleParts.highlight}
                              </span>
                            </>
                          )}
                          {titleParts.after && (
                            <>
                              <br />
                              {titleParts.after}
                            </>
                          )}
                        </h1>
                        <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block">
                          {description}
                        </p>
                        <Link
                          to={primaryButtonLink}
                          className="btn btn-md lg:btn-lg btn-primary easy-main-gradient min-w-150px mt-2"
                        >
                          <span>{primaryButtonText}</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                        </Link>
                        <p className="fs-7 text-black dark:text-white">
                          {defaultHero?.footerText}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        className="panel"
                        data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                      >
                        {heroData?.image && (
                          <img
                            src={heroData?.image}
                            alt="Hero"
                            className="dashboard-image w-100 rounded-2"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="integration-col image-wrapper">
            <div className="svg-wrapper mirror">
              <AnimatedIntegrationSVG />
            </div>
            <img
              src={SecondRowImg1}
              className="small-icon second-small1"
              alt=""
            />
            <img
              src={SecondRowImg2}
              className="small-icon second-small2"
              alt=""
            />
            <img
              src={SecondRowImg3}
              className="small-icon second-small3"
              alt=""
            />
            <img
              src={SecondRowImg4}
              className="small-icon second-small4"
              alt=""
            />
            <img
              src={SecondRowImg5}
              className="small-icon second-small5"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default services;
