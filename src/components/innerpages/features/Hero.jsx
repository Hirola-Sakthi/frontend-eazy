import { features6 } from "@/data/features";
import React, { useEffect } from "react";

export default function Hero() {
  console.log(features6);
  useEffect(() => {
    const items = document.querySelectorAll(".hero-feature-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((item) => observer.observe(item));
    console.log(items);
    console.log(observer);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero_header" className="hero-header section panel">
      {/* Decorative stars */}
      <div className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block">
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <img
            className="w-32px"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <img
            className="w-24px"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
          />
        </div>
      </div>

      <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-9">
        <div className="container max-w-lg">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            {/* Heading */}
            <div className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                What separates you from others.
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                We focus on helping you to make useful content more accessible
                with an ultimate goal for better sharing profit.
              </p>
            </div>

            {/* Sticky Parallax Features */}
            <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
              {features6.map((feature, i) => (
                <React.Fragment key={i}>
                  <div
                    key={feature.id}
                    className="hero-feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                    style={{
                      zIndex: (i + 1) * 10,
                      marginTop: i === 0 ? 0 : "-120px",
                    }}
                  >
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      <div className="order-0 lg:order-1">
                        <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                          <img
                            src={feature.imgSrc}
                            width={780}
                            height={728}
                            alt={feature.imgAlt}
                          />
                        </div>
                      </div>

                      <div className="order-1 lg:order-0 col-12 sm:col-5">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div className="panel vstack gap-2">
                            <span
                              className="fs-6 fw-bold"
                              style={{
                                background:
                                  "linear-gradient(135deg, #1338be, #2a2a72)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {feature.id.toString().padStart(2, "0")}.
                            </span>

                            <h3 className="h4 lg:h2 m-0">{feature.title}</h3>

                            <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                              {feature.description}
                            </p>

                            {feature.link && (
                              <a
                                href={feature.link.href}
                                className="uc-link fw-bold hstack gap-narrow"
                              >
                                <span>{feature.link.text}</span>
                                <i className="icon unicon-arrow-right" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i !== features6.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}

                  <style jsx>{`
                    .hero-feature-item {
                      position: sticky;
                      top: 120px;
                      margin-bottom: 120px;
                      padding: 2rem 0;
                      background: white;
                      transform: translateY(40px);
                      opacity: 0;
                      transition: transform 0.6s ease-out, opacity 0.6s ease-out;
                      will-change: transform, opacity;
                    }

                    /* Dark mode background */
                    :global(.dark) .hero-feature-item {
                      background: rgb(17 24 39);
                    }

                    /* Parallax movement */
                    .hero-visible {
                      transform: translateY(0) scale(1.01);
                      opacity: 1;
                      z-index: 20;
                    }

                    /* Overlapping effect with proper z-index */
                    .hero-feature-item:nth-child(1) {
                      z-index: 5;
                    }
                    .hero-feature-item:nth-child(2) {
                      z-index: 10;
                      margin-top: -120px;
                    }
                    .hero-feature-item:nth-child(3) {
                      z-index: 15;
                      margin-top: -120px;
                    }
                    .hero-feature-item:nth-child(4) {
                      z-index: 20;
                      margin-top: -120px;
                    }
                    .hero-feature-item:nth-child(5) {
                      z-index: 25;
                      margin-top: -120px;
                    }
                    .hero-feature-item:nth-child(6) {
                      z-index: 30;
                      margin-top: -120px;
                    }
                  `}</style>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
