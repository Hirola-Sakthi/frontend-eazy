import React from "react";
import Image1 from "/assets/images/common/first-row-img-2.svg";
import Image2 from "/assets/images/common/first-row-img-3.svg";
import Image3 from "/assets/images/common/first-row-img-4.svg";
import Image4 from "/assets/images/common/first-row-img-5.svg";
import Image5 from "/assets/images/common/second-row-img-1.svg";

export default function GraceMeet() {
  const defaultSectionContent = {
    titleHighlight: "Meet",
  };
  
  const sectionContent = defaultSectionContent;
  return (
    <section className="grace-meet-section">
      <div className="grace-meet-container">
        <div className="grace-meet-wrapper">
          <div className="grace-meet-main">
            <div className="grace-meet-content-first">
              <div className="d-flex align-items-center justify-start">
                <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                  <span className="fs-8 fw-bold text-uppercase text-black">
                    Grow AI
                  </span>
                </div>
              </div>

              <div>
                <h2 className="grace-meet-title">
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    {sectionContent.titleHighlight}
                  </span>{" "}
                  Grace
                </h2>

                <p className="grace-meet-subtitle">
                  our industry-leading Digital Staff
                  <br /> agent for clinical trial operations
                </p>
                <p className="grace-meet-mini-subtitle">
                  Advancing Next-Generation Clinical Research with AI Agents
                </p>

                <div className="grace-meet-buttons">
                  <button className="grace-meet-primary-btn">
                    Get Started{" "}
                    <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                  </button>
                </div>
              </div>
              <div className="grace-meet-down-content">
                <p className="grace-meet-news-text">Our work in the news:</p>

                <div className="grace-meet-dowm-second">
                  <ul className="grace-meet-marquee">
                    <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image1}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image2}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image3}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image4}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image5}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image1}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                     <li>
                      <div className="grace-meet-img-contanier">
                        <img
                          src={Image2}
                          alt="news-logo"
                          className="grace-meet-img"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grace-meet-content-second">
              <video
                className="grace-meet-main-video"
                src="https://framerusercontent.com/assets/KREzAp5aaNcJ6KxkV9vzOje6O9M.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
