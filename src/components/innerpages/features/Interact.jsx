import React from "react";
import { Check } from "lucide-react";
import sampleImg from "/assets/images/common/intreact-section-main-img.avif";

export default function Interact() {
  const defaultSectionContent = {
    titleHighlight: "Experts",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="interact-section">
      <div className="interact-header">
        <div className="d-flex align-items-center justify-center">
          <div className="cstack gap-1 py-1 px-2 border rounded-pill">
            <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
            <span className="fs-8 fw-bold text-uppercase text-black">
              Collaboration
            </span>
          </div>
        </div>
        <h2 className="interact-title">
          <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
          on call.
          <br />
          And coaches, celebrities & more.
        </h2>
      </div>
      <div className="interact-row">
        <div className="interact-image-wrapper">
          <img src={sampleImg} alt="Interaction" />
        </div>

        <div className="interact-content">
          <div className="interact-points">
            <h3 className="interact-main-title">
              Interact, don’t just consume.
            </h3>

            <ul>
              <li>
                <Check size={18} />
                Clean & modern layouts
              </li>
              <li>
                <Check size={18} />
                Fully responsive design
              </li>
              <li>
                <Check size={18} />
                Optimized performance
              </li>
            </ul>
          </div>
          <div className="interact-desc">
            <p>
              We craft digital experiences that are visually appealing,
              user-focused, and built to scale with your business needs.
            </p>

            <button className="interact-btn">
              Get Started{" "}
              <i className="icon icon-narrow unicon-arrow-right fw-bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
