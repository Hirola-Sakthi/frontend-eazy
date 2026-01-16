import React from "react";

import icon from "/assets/images/common/theEazy/footer-main-logo.svg"; 

export default function WorkForce() {
  return (
    <section className="workforce-section">
      <div className="workforce-overlay">
        <div className="workforce-content">
          <img src={icon} alt="Workforce Icon" className="workforce-icon" />

          <h2 className="workforce-title">Multiply the impact of your workforce with Zia,</h2>
          <h4 className="workforce-subtitle">Zoho’s powerful AI assistant</h4>

          <span className="workforce-line"></span>

          <p className="workforce-description">
            We help organizations transform their workforce with modern
            technology, training, and scalable digital solutions that drive
            long-term success.
          </p>
          <button className="workforce-btn">EXPLORE ZIA{" "}<i className="icon icon-narrow unicon-arrow-right fw-bold" /></button>
        </div>
      </div>
    </section>
  );
}
