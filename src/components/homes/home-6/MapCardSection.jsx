import React from "react";
import MainImage from "../../../../public/assets/images/common/map-card-section-main-img.webp";
import CardImage1 from "../../../../public/assets/images/common/map-section-img-1.webp";
import CardImage2 from "../../../../public/assets/images/common/map-section-img-2.webp";

export default function MapCardSection() {
  return (
    <>
      <section className="customCard-section container">
        <div className="featureShowcase-topImage">
          <img src={MainImage} alt="" />
        </div>

        <div className="customCard-row">
          <div className="customCard customCard-noBg">
            <div className="customCard-imgBox">
              <div className="person-rating">⭐ 4.9/5</div>
              <img src={CardImage1} className="person-img" alt="Person" />
            </div>

            <div className="customCard-contentBox">
              <div>
                <p className="card-one-name">Suman H</p>
              </div>
              <div>
                <p className="card-two-name">CEO</p>
              </div>
            </div>
          </div>
          <div className="customCard customCard-number business-automated">
            <div className="numberBox">
              <h2>40+</h2>
            </div>
            <div className="numberText">
              <p>Modules<br/> Included</p>
            </div>
          </div>
          <div className="customCard customCard-testimonial">
            <div>
              <p className="testimonialText">
                "The best workflow automation tool we've ever used, simplifying work across every department."
              </p>
              {/* <p className="textimonial-second-text">
                Sophia L.,{" "}
                <span className="testimonial-span">CMO at All Tech</span>
              </p> */}
            </div>

            <div className="testimonial-imgBox">
              <img
                src={CardImage2}
                className="testimonial-img"
                alt="Testimonial"
              />
            </div>
          </div>
          <div className="customCard customCard-noBg">
            <div className="textBox-main">
              <h3 className="card-four-main-text">
                Empowering businesses to work smarter,
                <span className="work-span">not harder.</span>
              </h3>
            </div>

            <div className="textBox-sub">
              <div class="zigBox1">10k+ Users</div>
              <div class="zigBox2">Industry Approved</div>
              <div class="zigBox3">24/7 Support</div>
              <div class="zigBox4">Secure & Reliable</div>
              <div class="zigBox5">Easy Integration</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
