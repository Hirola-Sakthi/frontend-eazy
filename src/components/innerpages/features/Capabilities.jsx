import React from "react";
import Image1 from "/assets/images/common/finance-management-image-2.png";
import { Funnel, MonitorCloud, Notebook, Sparkles } from "lucide-react";


export default function Capabilities() {
      const defaultSectionContent = {
    titleHighlight: "Capable's",
  };
  const sectionContent = defaultSectionContent;

  return (
    <section className="capabilities-section">
      <div className="capablilities-container">
        <div className="capabilities-first-column">
          <img
            src={Image1}
            alt="Capabilities"
            className="capabilities-image"
          />
        </div>
        <div className="capabilities-second-column">
          <div className="capabilities-second-colunm-content">
            <h2 className="capabilities-title">
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
                </span>{" "}
                Advanced Capabilities
              </h2>

            <p className="capabilities-description">
              Explore advanced capabilities designed to elevate your social experience and interactions.
            </p>
          </div>

          <div className="capabilities-main-cards">

            <div className="capabilities-card">
              <div className="capabilities-card-icon"><MonitorCloud /></div>
              <div className="capabilities-card-content">
                <h4>Development</h4>
                <p>Seamless cross-platform access on all devices.</p>
              </div>
            </div>

            <div className="capabilities-card">
              <div className="capabilities-card-icon"><Funnel /></div>
              <div className="capabilities-card-content">
                <h4>Analytics</h4>
                <p>Advanced search filters to find connections.</p>
              </div>
            </div>

            <div className="capabilities-card">
              <div className="capabilities-card-icon"><Notebook /></div>
              <div className="capabilities-card-content">
                <h4>Security</h4>
                <p>Integrated calendar for event scheduling.</p>
              </div>
            </div>

            <div className="capabilities-card">
              <div className="capabilities-card-icon"><Sparkles /></div>
              <div className="capabilities-card-content">
                <h4>Performance</h4>
                <p>Real-time translation for global communication.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
