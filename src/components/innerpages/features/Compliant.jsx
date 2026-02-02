import React from "react";
import Image1 from "/assets/images/common/compliant-section-img-1.webp";
import Image2 from "/assets/images/common/compliant-section-img-2.webp";
import { ChartLine, Leaf, NotebookText, RadioTower } from "lucide-react";

export default function Compliant() {
  const defaultSectionContent = {
    titleHighlight: "Everything",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="compliant-section">
      <div className="compliant-container">
        <h2 className="compliant-title">
          <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
          you need to launch fast
          <br /> & stay compliant
        </h2>

        <div className="compliant-card-container">
          <div className="compliant-row">
            <div className="compliant-card big horizontal">
              <img
                src={Image1}
                alt="Clean Energy"
                className="compliant-image"
              />
              <div className="compliant-content">
                <div className="compliant-icon">
                  {" "}
                  <RadioTower />
                </div>
                <h3 className="">Clean Energy Tracking</h3>
                <p>
                  Track your renewable energy usage and highlight clean energy.
                </p>
              </div>
            </div>

            <div className="compliant-card small">
              <div className="compliant-icon">
                {" "}
                <ChartLine />
              </div>
              <div className="second-content">
                <h3>Real-time Impact</h3>
                <p>Monitor emissions and ESG progress live.</p>
              </div>
            </div>
          </div>

          <div className="compliant-row">
            <div className="compliant-card big horizontal">
              <img
                src={Image2}
                alt="Clean Energy"
                className="compliant-image"
              />
              <div className="compliant-content">
                <div className="compliant-icon">
                  <NotebookText />
                </div>
                <h3>Clean Energy Tracking</h3>
                <p>
                  Track your renewable energy usage and highlight clean energy.
                </p>
              </div>
            </div>

            <div className="compliant-card small">
              <div className="compliant-icon">
                {" "}
                <Leaf />
              </div>
              <div className="second-content">
                <h3>Real-time Impact</h3>
                <p>Monitor emissions and ESG progress live.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
