import React from "react";
import { Link } from "react-router-dom";
import { useHeroes } from "@/api/content";

// Default/fallback hero content
const defaultHero = {
  title: "Work Smarter",
  titleHighlight: "Grow Faster",
  titleSuffix: "Spend Less",
  subtitle: "Trusted by 500+ businesses across India",
  description: "Manage your workforce, close more deals, track finances, and run projects — all from one intelligent platform. No more switching between disconnected tools.",
  primaryButtonText: "Start Free Trial",
  primaryButtonLink: "/",
  footerText: "No credit cards required - 14 days free trial."
};

export default function Hero({ useBackend = true }) {
  const { heroes, loading, error } = useHeroes('home');

  // Get the first hero for the home page or use default
  const heroData = useBackend && heroes.length > 0 ? heroes[0] : null;

  // Parse title to extract highlight if present (format: "text {highlight} more text")
  const parseTitle = (title) => {
    if (!title) return { before: defaultHero.title, highlight: defaultHero.titleHighlight, after: defaultHero.titleSuffix };

    const match = title.match(/^(.*?)\{([^}]+)\}(.*)$/);
    if (match) {
      return { before: match[1].trim(), highlight: match[2].trim(), after: match[3].trim() };
    }
    return { before: title, highlight: '', after: '' };
  };

  const titleParts = heroData ? parseTitle(heroData.title) : {
    before: defaultHero.title,
    highlight: defaultHero.titleHighlight,
    after: defaultHero.titleSuffix
  };

  const subtitle = heroData?.subtitle || defaultHero.subtitle;
  const description = heroData?.description || defaultHero.description;
  const primaryButtonText = heroData?.primaryButtonText || defaultHero.primaryButtonText;
  const primaryButtonLink = heroData?.primaryButtonLink || defaultHero.primaryButtonLink;

  return (
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
                  <div
                    className="position-absolute z-2"
                    style={{ top: "35%", right: "2%" }}
                  >
                    <img
                      className="w-48px lg:w-80px me-4"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 10000; delay: 1000;"
                      src="/assets/images/template/user-cursor-1.svg"
                      width="96"
                      height="106"
                    />
                  </div>
                  <div
                    className="position-absolute z-2"
                    style={{ bottom: "0%", left: "10%" }}
                  >
                    <img
                      className="w-48px lg:w-80px"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 5000; delay: 4000;"
                      src="/assets/images/template/user-cursor-3.svg"
                      width="94"
                      height="108"
                    />
                  </div>
                  {/* <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                    <span className="fs-8 fw-bold text-uppercase text-black">
                      {subtitle}
                    </span>
                  </div> */}
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-black">
                    {titleParts.before}
                    {titleParts.highlight && (
                      <>
                        {' '}
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
                    {defaultHero.footerText}
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
                      src={heroData.image}
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
  );
}
