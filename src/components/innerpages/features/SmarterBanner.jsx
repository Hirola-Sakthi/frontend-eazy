import React from "react";
import featureIcon1 from "/assets/images/common/smarter-banner-icon-1.png";
import featureIcon2 from "/assets/images/common/smarter-banner-icon-2.png";
import featureIcon3 from "/assets/images/common/smarter-banner-icon-3.png";
import PlayIcon from "/assets/images/common/smarter-banner-icon-4.png";
import bannerImage from "/assets/images/common/smarter-banner-main-img.webp";

export default function SmarterBanner() {
  const defaultSectionContent = {
    titleHighlight: "smarter",
  };
  const sectionContent = defaultSectionContent;

  return (
    <section className="smarter-banner-section">
      <div className="smarter-banner-wrap">
        <div className="smarter-banner-content">
          <h2 className="smarter-banner-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              A {sectionContent.titleHighlight}
            </span>{" "}
            way to organize work and data
          </h2>

          <div className="smarter-banner-features-list">
            <div className="smarter-banner-feature-item">
              <div className="smarter-banner-feature-icon">
                <span>
                  <img src={featureIcon1} alt="Feature 1" />
                </span>
              </div>
              <p>Database power</p>
            </div>
            <div className="smarter-banner-feature-item">
              <div className="smarter-banner-feature-icon">
                <span>
                  <img src={featureIcon2} alt="Feature 2" />
                </span>
              </div>
              <p>Spreadsheet ease</p>
            </div>
            <div className="smarter-banner-feature-item">
              <div className="smarter-banner-feature-icon">
                <span>
                  <img src={featureIcon3} alt="Feature 3" />
                </span>
              </div>
              <p>AI brains</p>
            </div>
          </div>

          <div className="smarter-banner-banner-buttons">
            <button className="smarter-banner-primary-btn">
              Start Your Free Trial{" "}
              <i className="icon icon-narrow unicon-arrow-right fw-bold" />
            </button>

            <button className="smarter-banner-secondary-btn">
              <span className="smarter-banner-circle-border">
                <img src={PlayIcon} alt="Play Icon" />
              </span>
              Watch a Video
            </button>
          </div>

          <div className="smarter-banner-banner-image">
            <img src={bannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
