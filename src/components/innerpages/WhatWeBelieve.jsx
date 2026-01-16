import { whatwebelive } from "@/data/features";
import { useFeatures } from "@/api/content";
import React, { useEffect } from "react";
import { ArrowUpRight, Quote } from "lucide-react";

export default function WhatWeBelieve({ useBackend = true }) {
  const { features: apiFeatures, loading } = useFeatures("steps");

  const features =
    useBackend && apiFeatures.length > 0
      ? apiFeatures.map((f, idx) => ({
          step: f.step || `0${idx + 1}`,
          title: f.title,
          description: f.description,
          imgSrc:
            f.image ||
            whatwebelive[idx]?.imgSrc ||
            "/assets/images/template/feature-image-01.jpg",
          altText: f.title,
          points: f.points || whatwebelive[idx]?.points || [],
          link: f.link?.href
            ? { href: f.link.href, text: f.link.text || "Learn more" }
            : whatwebelive[idx]?.link || null,
          testimonial: whatwebelive[idx]?.testimonial || null,
        }))
      : whatwebelive;

  useEffect(() => {
    const items = document.querySelectorAll(".htf-feature-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("htf-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                {" "}
                  What
                   <span className="d-inline-flex px-1 mx-2 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5 mt-2">
                   {" "}
                  We Believe
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Our platform is built on principles that guide every feature we create and every business we serve. These core beliefs shape who we are and how we help you succeed.
              </p>
            </div>
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, i) => (
                <React.Fragment key={i}>
                  <div
                    className="htf-feature-item feature-item panel"
                    data-anime="true"
                  >
                    <div
                      className="why-belive-section-row child-cols col-match justify-between g-4 lg:g-8 xl:g-10"
                      style={{
                        background: feature.bg,
                        padding: "35px 19px",
                        borderRadius: "24px",
                        marginTop:"-40px",
                      }}
                    >
                      {/* Image */}
                      <div className="col-12 sm:col-6 order-0 lg:order-1">
                        <div className="panel w-100">
                          <img
                            src={feature.imgSrc}
                            width={780}
                            height={728}
                            alt={feature.altText}
                            className="rounded-2"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="col-12 sm:col-6 order-1 lg:order-0">
                        <div
                          className="panel vstack justify-between h-100"
                          style={{ gap: "24px" }}
                        >
                          {/* Main Content Block */}
                          <div
                            className="vstack"
                            style={{
                              gap: "16px",
                              alignItems: "left",
                              justifyContent: "center ",
                            }}
                          >
                            {/* Step Number - Large Display */}

                            {/* Title */}
                            <h3
                              className="m-0 fw-bold"
                              style={{
                                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                lineHeight: "1.15",
                                letterSpacing: "-0.02em",
                                textAlign: "left",
                                color: feature.titleColor,
                              }}
                            >
                              {feature.title}
                            </h3>

                            {/* Description */}
                            <p
                              className="m-0"
                              style={{
                              fontSize: "clamp(0.85rem, 4vw, 1rem)",
                              lineHeight: "1.6",
                                color: feature.textColor,
                                // maxWidth: "480px",
                              }}
                            >
                              {feature.description}
                            </p>
                          </div>

                          {/* Testimonial - Minimal Quote Style */}
                          {feature.testimonial && (
                            <div
                              className="testimonial-block"
                              style={{
                                position: "relative",
                                padding: "16px 20px",
                                borderRadius: "12px",
                                background: "#fafafa",
                                borderLeft: "3px solid #6366f1",
                              }}
                            >
                              <Quote
                                size={20}
                                style={{
                                  position: "absolute",
                                  top: "12px",
                                  right: "16px",
                                  stroke: "#6366f1",
                                  opacity: 0.3,
                                }}
                              />
                              <p
                                style={{
                                  fontSize: "14px",
                                  color: "#475569",
                                  lineHeight: "1.5",
                                  margin: 0,
                                  fontStyle: "italic",
                                }}
                              >
                                {feature.testimonial.quote}
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  marginTop: "12px",
                                }}
                              >
                                <img
                                  src={feature.testimonial.imgSrc}
                                  alt={feature.testimonial.name}
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                  }}
                                />
                                <div>
                                  <div
                                    style={{
                                      fontSize: "13px",
                                      fontWeight: "600",
                                      color: "#1e293b",
                                    }}
                                  >
                                    {feature.testimonial.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "12px",
                                      color: "#94a3b8",
                                    }}
                                  >
                                    {feature.testimonial.role}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {i !== features.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}

                  <style jsx>{`
                    .htf-feature-item {
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

                    :global(.dark) .htf-feature-item {
                      background: rgb(17 24 39);
                    }

                    :global(.dark) .htf-feature-item p {
                      color: #94a3b8 !important;
                    }

                    :global(.dark) .htf-feature-item h3 {
                      color: #f1f5f9 !important;
                    }

                    :global(.dark) .point-card {
                      background: linear-gradient(
                        135deg,
                        #1e293b 0%,
                        #0f172a 100%
                      ) !important;
                      border-color: #334155 !important;
                    }

                    :global(.dark) .point-card span:last-child {
                      color: #e2e8f0 !important;
                    }

                    :global(.dark) .testimonial-block {
                      background: #1e293b !important;
                    }

                    :global(.dark) .testimonial-block p {
                      color: #cbd5e1 !important;
                    }

                    .point-card:hover {
                      transform: translateY(-2px);
                      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                      border-color: #6366f1 !important;
                    }

                    .cta-btn:hover {
                      transform: translateY(-2px);
                      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
                    }

                    .htf-visible {
                      transform: translateY(0) scale(1.01);
                      opacity: 1;
                      z-index: 20;
                    }

                    .htf-feature-item:nth-child(1) {
                      z-index: 5;
                    }
                    .htf-feature-item:nth-child(2) {
                      z-index: 10;
                      margin-top: -120px;
                    }
                    .htf-feature-item:nth-child(3) {
                      z-index: 15;
                      margin-top: -120px;
                    }
                    .htf-feature-item:nth-child(4) {
                      z-index: 20;
                      margin-top: -120px;
                    }
                    .htf-feature-item:nth-child(5) {
                      z-index: 25;
                      margin-top: -120px;
                    }
                    .htf-feature-item:nth-child(6) {
                      z-index: 30;
                      margin-top: -120px;
                    }

                    @media (max-width: 640px) {
                      .points-grid {
                        grid-template-columns: 1fr !important;
                      }
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
