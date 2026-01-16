import React from "react";
import quoteImg from "/assets/images/common/quotes-business-icon.svg";
import ScrollImg1 from "/assets/images/common/business-scroll-1.png";
import ScrollImg2 from "/assets/images/common/business-scroll-2.png";
import ScrollImg3 from "/assets/images/common/business-scroll-3.png";
import ScrollBrand1 from "/assets/images/common/scroll-brand-img-1.png";


export default function BusinessScroll() {
  return (
    <section className="business-section">
      <div className="business-container">
        <h2 className="business-title">
          Make the switch to the future of business accounting
        </h2>

        <div className="business-flex">
          <div className="customer-slider">
            <div className="customer-slider-track">
              <div className="customer-card">
                <img src={ScrollImg1} alt="" className="scroll-img" />
                <div className="customer-business-content">
                  <p className="scroll-content">
                    Backbone of my company's finance and operations
                  </p>
                  <div className="scroll-name-row">
                  <p className="scroll-content-name">
                    SATYAN THUKRAL, CEO
                  </p>
                  <img src={ScrollBrand1} alt="scroll-brand" className="scroll-brand-img" /></div>
                </div>
              </div>

              <div className="customer-card">
                <img src={ScrollImg2} alt="" className="scroll-img" />
                <div className="customer-business-content">
                  <p className="scroll-content">
                    Best accounting software made for businesses worldwide
                  </p>
                  <div className="scroll-name-row">
                  <p className="scroll-content-name">
                    VISHWADH KANDULA, CEO
                  </p>
                  <img src={ScrollBrand1} alt="scroll-brand" className="scroll-brand-img" /></div>
                </div>
              </div>

              <div className="customer-card">
                <img src={ScrollImg3} alt="" className="scroll-img" />
                <div className="customer-business-content">
                  <p className="scroll-content">
                    Most versatile accounting software for every business need
                  </p>
                  <div className="scroll-name-row">
                  <p className="scroll-content-name">
                    NAVEEDH V.V, Co-Founder
                  </p>
                  <img src={ScrollBrand1} alt="scroll-brand" className="scroll-brand-img" /></div>
                </div>
              </div>

              <div className="customer-card">
                <img src={ScrollImg1} alt="" className="scroll-img" />
                <div className="customer-business-content">
                  <p className="scroll-content">
                    Backbone of my company's finance and operations
                  </p>
                  <div className="scroll-name-row">
                  <p className="scroll-content-name">
                    SATYAN THUKRAL, CEO
                  </p>
                  <img src={ScrollBrand1} alt="scroll-brand" className="scroll-brand-img" /></div>
                </div>
              </div>

              <div className="customer-card">
                <img src={ScrollImg2} alt="" className="scroll-img" />
                <div className="customer-business-content">
                  <p className="scroll-content">
                    Best accounting software made for businesses worldwide
                  </p>
                    <div className="scroll-name-row">
                  <p className="scroll-content-name">
                    VISHWADH KANDULA, CEO
                  </p>
                  <img src={ScrollBrand1} alt="scroll-brand" className="scroll-brand-img" /></div>
                </div>
              </div>    

              <div className="customer-card">
                <img src={ScrollImg3} alt="" className="scroll-img" />
                <div className="customer-business-content">
                  <p className="scroll-content">
                    Most versatile accounting software for every business need
                  </p>
                  <div className="scroll-name-row">
                  <p className="scroll-content-name">
                    NAVEEDH V.V, Co-Founder
                  </p>
                  <img src={ScrollBrand1} alt="scroll-brand" className="scroll-brand-img" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="business-highlight">
            <img src={quoteImg} alt="icon" className="highlight-icon" />
            4.9 <br /> Customer Rating
            <span aria-hidden="true">Eazy&nbsp;BOOKS</span>
          </div>
        </div>
        <div className="business-logos"></div>
      </div>
    </section>
  );
}
