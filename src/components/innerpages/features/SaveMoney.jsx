import React from "react";
import SecondImage from "/assets/images/common/save-money-main-image.webp";
import { BrainCircuit, ChartNoAxesCombined, DatabaseZap, UserLock } from "lucide-react";

export default function SaveMoney() {
  const defaultSectionContent = {
    titleHighlight: "Time",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="save-money-section">
      <div className="save-money-container">
        <div className="save-money-row">
          <div className="save-money-first-column">
            <div className="d-flex align-items-center save-money-minititle">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  5 star reviews
                </span>
              </div>
            </div>
            <h2 className="save-money-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              is money.
              <br />
              Save both.
            </h2>

            <p className="save-money-subtitle">
              Easy-to-use corporate cards, bill payments, accounting, and a
              whole lot more. All in one place.
            </p>

            <div className="save-money-buttons">
              <button className="save-money-btn-primary">
                Talk to an expert{" "}
                <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
              <button className="save-money-btn-outline">
                Explore product{" "}
                <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            </div>

            <div className="save-money-main-cards">
              <div className="save-money-card">
                <div className="save-money-card-icon">
                  <BrainCircuit />
                </div>
                <div className="save-money-card-content">
                  <h4>Web Development</h4>
                  <p>Responsive and scalable web solutions.</p>
                </div>
              </div>

              <div className="save-money-card">
                <div className="save-money-card-icon">
                  <DatabaseZap />
                </div>
                <div className="save-money-card-content">
                  <h4>Data Analytics</h4>
                  <p>Insights powered by real-time data.</p>
                </div>
              </div>

              <div className="save-money-card">
                <div className="save-money-card-icon">
                  <UserLock />
                </div>
                <div className="save-money-card-content">
                  <h4>Secure Systems</h4>
                  <p>Reliable protection for digital assets.</p>
                </div>
              </div>

              <div className="save-money-card">
                <div className="save-money-card-icon">
                 <ChartNoAxesCombined />
                </div>
                <div className="save-money-card-content">
                  <h4>High Performance</h4>
                  <p>Fast, smooth, optimized experiences.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="save-money-second-column">
            <img
              src={SecondImage}
              alt="Privacy Illustration"
              className="save-money-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
