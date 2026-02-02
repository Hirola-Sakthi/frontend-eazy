import React from "react";
import RevenueImage from "/assets/images/common/revenue-management-main-img.svg";
import { ChartLine, Sparkles, UserStar } from "lucide-react";

export default function RevenueManagement() {
  const defaultSectionContent = {
    titleHighlight: " The new",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="revenue-management">
      <div className="revenue-management-container">
        <div className="revenue-management-container-large">
          <div className="revenue-management-hero-content">
            <div className="revenue-management-left-content">
              <div className="d-flex align-items-center">
                <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                  <span className="fs-8 fw-bold text-uppercase text-black">
                    Revenue Management
                  </span>
                </div>
              </div>
              <div>
              <h2 className="rm-title">
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
                </span>{" "}
                 standard for revenue management
              </h2>

              <p className="rm-description">
                Optimize pricing, improve occupancy, and maximize profitability
                using intelligent, data-driven revenue management solutions.
              </p>
                           <div className="rm-button-group">
                <button className="rm-btn primary">Get Started</button>
                <button className="rm-btn secondary">Book a demo <i className="icon icon-narrow unicon-arrow-right fw-bold" /></button>
              </div>
              </div>
 
              <div className="revenue-management-below-content">
                <div className="revenue-management-below-content-list">
                  <div className="rm-feature">
                    <div className="rm-icon-group">
                    <div className="rm-icon"><UserStar /></div>
                    </div>
                    <h4>The fastest way to go from quote to signed contract</h4>
                  </div>

                  <div className="rm-feature">
                    <div className="rm-icon-group">
                    <div className="rm-icon"><Sparkles /></div>
                    </div>
                    <h4>Flexible plans and subscriptions built for scale</h4>
                  </div>

                  <div className="rm-feature">
                    <div className="rm-icon-group">
                    <div className="rm-icon"><ChartLine /></div>
                    </div>
                    <h4>From usage to revenue, fully automated in real-time</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="revenue-management-image-container">
            <div className="revenue-management-right-content">
              <img src={RevenueImage} alt="Revenue Management" />
            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
