import React from "react";

import SecondImage from "/assets/images/common/privacy-partner-second-img.avif";

export default function PrivacyPartner() {
      const defaultSectionContent = {
    titleHighlight: "Your",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="privacy-partner-section">
      <div className="privacy-partner-container">
        <div className="privacy-partner-row">
          <div className="privacy-partner-first-column">
            <div className="d-flex align-items-center privacy-partner-minititle">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  Intelligent Privacy Management
                </span>
              </div>
            </div>
            <h2 className="privacy-partner-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
            always-on
            <br />
            privacy partner
          </h2>

            <p className="privacy-partner-subtitle">
              Trust Keith holds your hand to get you (and keep you!) as
              compliant as you need by giving you access to a dedicated human
              expert and an intelligent platform.
            </p>

            <div className="privacy-partner-buttons">
              <button className="privacy-partner-btn-primary">
                Talk to an expert <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
              <button className="privacy-partner-btn-outline">
                See how it works <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            </div>
          </div>
          <div className="privacy-partner-second-column privacy-partner-dot-grid">
            <img
              src={SecondImage}
              alt="Privacy Illustration"
              className="privacy-partner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
