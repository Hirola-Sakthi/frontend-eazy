import React from "react";
import { ArrowUpRight } from "lucide-react";

import MobileImg from "/assets/images/common/mobile-app-section-img-1.png";
import DesktopImg from "/assets/images/common/mobile-app-section-img-2.png";
import AppStoreImg from "/assets/images/common/mobile-app-section-app-store.svg";
import GooglePlayImg from "/assets/images/common/mobile-app-section-google-play.svg";
import MicroSoftImg from "/assets/images/common/mobile-app-section-microsoft.png";

export default function MobileAppSection() {
  return (
    <section className="mobile-desktop-section">
      <div className="mobile-desktop-wrapper">

        <div className="mobile-section">
          <div className="section-top mobile-top">
            <span className="corner-arrow">
              <ArrowUpRight size={18} />
            </span>

            <h2 className="section-title">Mobile App</h2>
            <p className="section-desc">
              Carry your accounts wherever you go!
            </p>
          </div>

          <div className="center-image">
            <img src={MobileImg} alt="Mobile App" />
          </div>

          <div className="mobile-second-divider"></div>

          <div className="inline-images">
            <img src={AppStoreImg} alt="App Store" />
            <img src={GooglePlayImg} alt="Google Play" />
          </div>
        </div>
        <div className="desktop-section">
          <div className="section-top desktop-top">
            <span className="corner-arrow">
              <ArrowUpRight size={18} />
            </span>

            <h2 className="section-title">Desktop App</h2>
            <p className="section-desc">
              A simple, secure, standalone desktop solution
            </p>
          </div>

          <div className="center-image">
            <img src={DesktopImg} alt="Desktop App" />
          </div>

          <div className="desktop-second-divider"></div>

          <div className="inline-images">
            <img src={MicroSoftImg} alt="Microsoft Store" />
          </div>
        </div>

      </div>
    </section>
  );
}
