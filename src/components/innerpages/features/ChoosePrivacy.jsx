import React from "react";


import iconImg from "../../../../public/assets/images/common/choose-privacy-icon.svg";
import mainImg from "../../../../public/assets/images/common/choose-privacy-img.png";

export default function ChoosePrivacy() {
  return (
    <section className="choose-privacy">
      <div className="choose-privacy-content">
        <img src={iconImg} alt="Privacy Icon" className="privacy-icon" />

        <h2 className="privacy-title">Choose privacy.<br/>Choose Zoho.</h2>

        <p className="privacy-desc">
          At Zoho, we take pride in our perpetual efforts to surpass all<br/> expectations in providing security and privacy to our customers in <br/>this increasingly connected world.
        </p>

        <img src={mainImg} alt="Privacy Illustration" className="privacy-image" />
      </div>
    </section>
  );
}
