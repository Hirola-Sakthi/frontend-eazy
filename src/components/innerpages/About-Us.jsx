import React from "react";

import img1 from "/assets/images/common/about-us-small-img-1.webp";
import img2 from "/assets/images/common/about-us-small-img-2.webp";
import img3 from "/assets/images/common/about-us-small-img-3.webp";
import img4 from "/assets/images/common/about-us-small-img-4.webp";
import img5 from "/assets/images/common/about-us-small-img-5.webp";

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        <span className="about-badge d-flex items-center gap-1">
          <span className="about-span">About</span> People, purpose & product
          <i className="icon icon-narrow unicon-arrow-right text-black fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
        </span>
        <div className="about-icons">
          <img src={img1} alt="tech-1" className="icon-sm" />
          <img src={img2} alt="tech-2" className="icon-md" />
          <img src={img3} alt="tech-3" className="icon-lg" />
          <img src={img4} alt="tech-4" className="icon-md" />
          <img src={img5} alt="tech-5" className="icon-sm" />
        </div>

        <h3 className="about-title">
          Who We Are <br />
        </h3>
        <p className="about-text">
          We're The Eazy — a team of passionate builders, engineers, and business minds who believe that running a business shouldn't require a dozen
          disconnected tools, expensive consultants, or sleepless nights wrestling with spreadsheets. <br />
          Founded in India, built for the world, we're on a mission to make business operations simple, unified, and intelligent.
        </p>
        {/* <p className="about-text">
          Founded in India, built for the world, we're on a mission to make business operations simple, unified, and intelligent.
        </p> */}

        {/* <button className="about-btn d-flex items-center gap-2">
          Learn More
          <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
        </button> */}
      </div>
    </section>
  );
}
