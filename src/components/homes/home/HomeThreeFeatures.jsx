import { features3 } from "@/data/features";
import { useFeatures } from "@/api/content";
import React, { useEffect } from "react";
import { ArrowUpRight, Quote } from "lucide-react";

export default function HomeThreeFeatures({ useBackend = true }) {
  const { features: apiFeatures, loading } = useFeatures("steps");

  const features =
    useBackend && apiFeatures.length > 0
      ? apiFeatures.map((f, idx) => ({
          step: f.step || `0${idx + 1}`,
          title: f.title,
          description: f.description,
          imgSrc: f.image || features3[idx]?.imgSrc || "/assets/images/template/feature-image-01.jpg",
          altText: f.title,
          points: f.points || features3[idx]?.points || [],
          link: f.link?.href ? { href: f.link.href, text: f.link.text || "Learn more" } : features3[idx]?.link || null,
          testimonial: features3[idx]?.testimonial || null,
        }))
      : features3;

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
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                <span className="fs-8 fw-bold text-uppercase text-black">Smart</span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                {" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5 mt-2">
                  Smart Features
                </span>{" "}
                for your business
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator.
              </p>
            </div>
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, i) => (
                <React.Fragment key={i}>
                  <div className="htf-feature-item feature-item panel" data-anime="true">
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      {/* Image */}
                      <div className="col-12 sm:col-6 order-1 lg:order-1">
                        <div className="panel w-100">
                          <img src={feature.imgSrc} width={780} height={728} alt={feature.altText} className="rounded-2" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="col-12 sm:col-6 order-0 lg:order-0">
                        <div className="panel vstack justify-between h-100" style={{ gap: "24px" }}>
                          {/* Main Content Block */}
                          <div className="vstack" style={{ gap: "16px" }}>
                            {/* Step Number - Large Display */}
                            <div className="hstack items-end" style={{ gap: "12px" }}>
                              <span
                                className="fw-bold"
                                style={{
                                  fontSize: "18px",
                                  borderRadius: "5px",
                                  lineHeight: "1",
                                  background: "linear-gradient(135deg, #2a2a72, #1338be)",
                                  // WebkitBackgroundClip: "text",
                                  color: "white",
                                  WebkitTextFillColor: "white",
                                  padding: "5px",
                                }}>
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <div
                                style={{
                                  height: "2px",
                                  flex: 1,
                                  background: "linear-gradient(135deg, #2a2a72, #1338be)",
                                  marginBottom: "12px",
                                }}
                              />
                            </div>

                            {/* Title */}
                            <h3
                              className="m-0 fw-bold"
                              style={{
                                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                lineHeight: "1.15",
                                letterSpacing: "-0.02em",
                              }}>
                              {feature.title}
                            </h3>

                            {/* Description */}
                            <p
                              className="m-0"
                              style={{
                                fontSize: "1rem",
                                lineHeight: "1.6",
                                color: "#000",
                                maxWidth: "480px",
                              }}>
                              {feature.description}
                            </p>

                            {/* Points - Modern Grid Cards */}
                            {feature.points?.length > 0 && (
                              <div
                                className="points-grid"
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "repeat(2, 1fr)",
                                  gap: "8px",
                                  marginTop: "8px",
                                }}>
                                {feature.points.map((point, idx) => (
                                  <div
                                    key={idx}
                                    className="point-card"
                                    style={{
                                      padding: "12px 14px",
                                      borderRadius: "10px",
                                      display: "flex",
                                      alignItems: "flex-start",
                                      gap: "10px",
                                      transition: "all 0.2s ease",
                                    }}>
                                    <span
                                      style={{
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        color: "#2a2a72",
                                        padding: "2px 6px",
                                        borderRadius: "4px",
                                        flexShrink: 0,
                                      }}>
                                      {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        color: "#2a2a72",
                                        lineHeight: "1.4",
                                      }}>
                                      {point}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* CTA Button */}
                            {feature.link && (
                              <a
                                href={feature.link.href}
                                className="cta-btn"
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  marginTop: "8px",
                                  padding: "10px 20px",
                                  background: "linear-gradient(135deg, #2a2a72, #1338be)",
                                  color: "white",
                                  borderRadius: "50px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  textDecoration: "none",
                                  width: "fit-content",
                                  transition: "all 0.3s ease",
                                }}>
                                {feature.link.text}
                                <ArrowUpRight size={16} style={{ stroke: "white" }} strokeWidth={2.5} />
                              </a>
                            )}
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
                              }}>
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
                                }}>
                                {feature.testimonial.quote}
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  marginTop: "12px",
                                }}>
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
                                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#1e293b" }}>{feature.testimonial.name}</div>
                                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>{feature.testimonial.role}</div>
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
                      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
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
                      .htf-feature-item {
                        top: 40px;
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
