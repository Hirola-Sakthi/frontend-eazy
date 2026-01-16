import { Play } from "lucide-react";
import React from "react";

export default function HrSoftware() {
              const defaultSectionContent = {
    titleHighlight: "HR",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="hr-hero-section">
      <div className="hr-hero-container">
        <div className="hero-card">
          <div className="hero-col hero-col-wide hero-logo">
            <img
              src="/assets/images/common/theEazy/footer-main-logo.svg"
              alt="HR logo"
            />
          </div>

          <div className="hero-col">
            <p>Unburden your HR team</p>
          </div>

          <div className="play-pill">
            <span className="play-icon">
              <Play size={14} />
            </span>
            <span className="play-text">Play video</span>
          </div>
        </div>

        <div className="hero-content">
          <h1> <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
            software for every business</h1>
          <p>
            Streamline all your HR processes and deliver exceptional employee
            experiences with Zoho People—cloud-based HR software that's
            intuitive, agile, and mobile-friendly.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary btn-with-arrow">
            Sign up for free trial
            <i className="icon icon-narrow unicon-arrow-right fw-bold" />
          </button>

          <button className="btn-secondary">Request a demo</button>
        </div>
        <div className="brand-logos">
          <img
            src="/assets/images/common/hr-section-partner-1.svg"
            alt="brand"
          />
          <img
            src="/assets/images/common/hr-section-partner-2.svg"
            alt="brand"
          />
          <img
            src="/assets/images/common/hr-section-partner-3.png"
            alt="brand"
          />
          <img
            src="/assets/images/common/hr-section-partner-4.svg"
            alt="brand"
          />
          <img
            src="/assets/images/common/hr-section-partner-5.png"
            alt="brand"
          />
        </div>
      </div>
    </section>
  );
}
