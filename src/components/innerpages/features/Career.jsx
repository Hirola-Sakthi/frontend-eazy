import React from "react";

import img1 from "../../../../public/assets/images/common/career-bg-img-1.webp";
import img2 from "../../../../public/assets/images/common/career-main-page-img.webp";
import img3 from "../../../../public/assets/images/common/career-sub-img-1.webp";
import img4 from "../../../../public/assets/images/common/career-bg-img-1.webp";
import img5 from "../../../../public/assets/images/common/career-sub-img-2.webp";
import img6 from "../../../../public/assets/images/common/career-sub-img-3.webp";

export default function Career() {
  return (
    <section className="career-section">
      <div className="career-content">
        <span className="career-badge">
          <span className="career-span">Careers</span>
          Grow with Brighthub
          <i className="icon icon-narrow unicon-arrow-right text-black" />
        </span>
        <h3 className="career-title">Build the Future With Us</h3>
        <p className="career-text">
          We’re not just hiring—we’re investing in people who want to make a
          difference. If you’re passionate, curious, and ready to grow, you’ll
          fit right in.
        </p>
        <div className="career-images-wrapper">
          <img src={img1} alt="left" className="career-img side-img left-img" />
          <div className="career-main-img">
            <img src={img2} alt="main" />
            <div className="career-inner-images">
              <img src={img3} alt="inner-1" className="inner-img img-one" />
              <img src={img5} alt="inner-2" className="inner-img img-two" />
              <img src={img6} alt="inner-3" className="inner-img img-three" />
            </div>
          </div>

          <img
            src={img4}
            alt="right"
            className="career-img side-img right-img"
          />
        </div>
      </div>
    </section>
  );
}
