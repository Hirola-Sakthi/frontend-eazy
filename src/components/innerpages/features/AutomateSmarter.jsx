import React from "react";
import AutomatedAnimated from "./AutomatedAnimated";
import TextImgae from "../../../../public/assets/images/common/automated-smarter-text-img.svg";


export default function AutomateSmarter() {
  const defaultSectionContent = {
    titleHighlight: "Automate",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="automate-section container">
      <div className="automate-images">
        <AutomatedAnimated />
      </div>

      <div className="automate-content">
        <h2 className="automate-main-title">
          <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
          Smarter <br /> Work Faster{" "}
          <img src={TextImgae} alt="" className="automate-text-img" />
        </h2>

        <p className="automate-subtitle">
          The Eazy brings everything you need into one intuitive platform that
          grows with your business.
        </p>

        <div className="automate-btn-row">
          <button className="automate-primary-btn">
            Get Started
            <i className="icon icon-narrow unicon-arrow-right fw-bold" />
          </button>

          <span className="automate-outline-btn">See how it works</span>
        </div>
      </div>
    </section>
  );
}
