import React from "react";
import bannerImage from "/assets/images/common/cloud-based-section-main-img.png";
import SmallImage from "/assets/images/common/cloud-based-small-lock-img.png";


export default function CloudBased() {
  const defaultSectionContent = {
    titleHighlight: "Secure,",
  };
  const sectionContent = defaultSectionContent;

  return (
    <section className="cloud-based-section">
      <div className="cloud-based-wrap">
        <div className="cloud-based-content">
          <div className="cloud-based-top-icon">
            <img src={SmallImage} alt="Cloud Icon" />
          </div>
          <h2 className="cloud-based-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
            enterprise-class, and cloud‑based <br />
          </h2>
          <p className="cloud-based-subtitle">
            Getting started with Rise is simple. There’s no software to
            download, patch, or upgrade, ever. And with end-to-end data
            encryption, SSO, high availability, redundant data storage, disaster
            recovery, and robust privacy protections, your IT department will
            love Rise.
          </p>
          <div className="cloud-based-buttons">
            <button className="cloud-based-primary-btn">Contact Us </button>

            <button className="cloud-based-secondary-btn">
              Learn More{" "}
              <i className="icon icon-narrow unicon-arrow-right fw-bold" />
            </button>
          </div>
          <div className="cloud-based-image">
            <img src={bannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
