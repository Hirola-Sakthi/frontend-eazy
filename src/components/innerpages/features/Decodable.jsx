import React from "react";
import Image1 from "/assets/images/common/decodable-section-main-image.png";



export default function Decodable() {
        const defaultSectionContent = {
       titleHighlight: "Join",
     };
     const sectionContent = defaultSectionContent;
  return (
    <section className="Decodable-section">
      <div className="Decodable-title-wrapper">
        <h2 className="Decodable-title">
               <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
               </span>{" "}
              companies like Drata who trust Decodable for mission-critical real-time workloads
             </h2>
      </div>
      <div className="Decodable-grid">
        <div className="Decodable-image-wrapper">
          <img
            src={Image1}
            alt="Decodable"
            className="Decodable-image"
          />
        </div>
        <div className="Decodable-content">
          <p className="Decodable-description">
            "We’re using Decodable to ingest nearly two terabytes of data a day. We've seen firsthand how Decodable accelerates the development of AI applications. Our engineers swiftly created a prototype in just 12 days, allowing us to expedite the launch of our AI product within two months."
          </p>

          <h3 className="Decodable-name">
           Lior Solomon
          </h3>

          <p className="Decodable-text">
        VP of Data Engineering at Drata
          </p>

          <div className="Decodable-buttons">
            <button className="Decodable-btn primary">Get Started</button>
            <button className="Decodable-btn secondary">Learn More {" "}
                <i className="icon icon-narrow unicon-arrow-right fw-bold" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
