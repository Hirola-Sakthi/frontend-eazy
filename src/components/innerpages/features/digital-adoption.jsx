import React from "react";

import mainImg from "/assets/images/common/digital-adoption-main-img.webp";
import bgSvg from "/assets/images/common/digital-adoption-bg-img-2.svg";
import icon1 from "/assets/images/common/make-an-impact-icon.png";

export default function DigitalAdoption() {
  const defaultSectionContent = {
    titleHighlight: "The smarter",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="digital-adoption-section">
      <div className="digital-adoption-wrap">
        <div className="digital-adoption-content">
          <h2>
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
            way to drive digital adoption
          </h2>
          <p>
            Zoho Digital Adoption Platform is an employee onboarding solution
            that enables organisations to deliver clear, consistent, and
            contextual in-product guidance to every employee.
          </p>

          <button className="primary-btn">
            Get Started{" "}
            <i className="icon icon-narrow unicon-arrow-right fw-bold" />
          </button>
        </div>

        <div className="digital-adoption-image">
          <img src={bgSvg} alt="" className="bg-svg" />
          <img src={mainImg} alt="Digital Adoption" className="main-img" />

          <div className="floating-item digital-adoption-icon-1">
            <div className="floating-icon">
              <img src={icon1} alt="" />
            </div>
            <div className="floating-text">Walkthrough</div>
          </div>

          <div className="floating-item digital-adoption-icon-2">
            <div className="floating-icon">
              <img src={icon1} alt="" />
            </div>
            <div className="floating-text">Web Banner</div>
          </div>

          <div className="floating-item digital-adoption-icon-3">
            <div className="floating-icon">
              <img src={icon1} alt="" />
            </div>
            <div className="floating-text">Help Hub</div>
          </div>

          {/* <div className="floating-item icon-4">
            <div className="floating-icon">
              <img src={icon1} alt="" />
            </div>
            <div className="floating-text">User Insights</div>
          </div> */}

          <div className="floating-item digital-adoption-icon-5">
            <div className="floating-icon">
              <img src={icon1} alt="" />
            </div>
            <div className="floating-text">Guide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
