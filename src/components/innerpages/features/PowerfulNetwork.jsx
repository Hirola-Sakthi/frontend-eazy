import React from "react";
import SecondImage from "/assets/images/common/powerful-network-section-main-img.webp";

export default function PowerfulNetwork() {
  const defaultSectionContent = {
    titleHighlight: "network",
  };

  return (
    <section className="powerful-network-section">
      <div className="powerful-network-container">
        <div className="powerful-network-row">
          <div className="powerful-network-second-column">
            <img
              src={SecondImage}
              alt="Powerful Network Illustration"
              className="powerful-network-image"
            />
          </div>
          <div className="powerful-network-first-column">
            <div className="d-flex align-items-center powerful-network-minititle">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  financial solutions
                </span>
              </div>
            </div>

             <h2 className="powerful-network-title">               
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                A {defaultSectionContent.titleHighlight}
              </span>{" "}
               that gets
              <br />more powerful daily
            </h2>

            <p className="powerful-network-subtitle">
              When you build on the world’s largest open banking data network,
              every product and solution is made better for you and your
              customers through new data and insights.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
