import React from "react";
import { Link } from "react-router-dom";

export function PartnerHero({ onApplyClick }) {
  return (
    <div id="partner-hero" className="partner-hero section panel">
      <div className="section-outer panel py-6 xl:py-10">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel pt-9"
            data-anime="onview: -200; targets: >*; translateY: [32, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 600; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 g-4 align-center">
              <div className="lg:col-6 md:col-12">
                <div className="panel vstack items-start gap-3 text-dark">
                  <div className="cstack gap-1 py-1 px-3 border rounded-pill bg-dark/05">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                    <span className="fs-8 fw-bold text-uppercase">
                      Partners
                    </span>
                  </div>
                  <h1 className="h2 lg:h1 m-0 text-dark">
                    Become a Strategic Partner
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark/90">
                    Join our partner network to resell, integrate, and grow with
                    our suite of enterprise-grade software products. We provide
                    training, co-marketing, and revenue opportunities.
                  </p>

                  <div className="hstack gap-2 mt-3">
                    <button
                      className="btn btn-md btn-primary"
                      onClick={onApplyClick}
                    >
                      Join Us Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-6 md:col-12">
                <div className="map-img-wrapper">
                  <img
                    className="map-img"
                    alt="Eazy"
                    src="/assets/images/common/map-section-img-1.webp"
                  />
                </div>

                {/* <div className="panel border rounded-1-5 p-4 bg-white/03">
                  <div className="vstack gap-2">
                    <div className="hstack gap-2 items-center">
                      <div className="icon-box w-48px h-48px rounded-1-5 easy-main-gradient cstack">
                        <span className="fs-5 text-white">🤝</span>
                      </div>
                      <div>
                        <div className="fs-7 fw-bold text-dark">Partner-first approach</div>
                        <div className="fs-8 text-white/80">Dedicated support & success managers</div>
                      </div>
                    </div>

                    <ul className="vstack gap-1 fs-8 text-white/85">
                      <li className="fs-5">Competitive margins and recurring revenue</li>
                      <li className="fs-5">Co-branded marketing assets</li>
                      <li className="fs-5">Sandbox & API access for integrations</li>
                      <li className="fs-5">Competitive margins and recurring revenue</li>
                      <li className="fs-5">Co-branded marketing assets</li>
                      <li className="fs-5">Sandbox & API access for integrations</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
