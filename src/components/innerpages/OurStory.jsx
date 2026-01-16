import React from "react";

export default function OurStory() {
  return (
    <div id="faq" className="faq section panel  scrollSpysection">
      <div className="section-outer panel py-6 xl:py-6">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-6 story-background" style={{marginTop:"50px"}}>
                <div className="panel">
                  <h2 className="h3 lg:h2 m-0 pb-3" style={{ color: "#2a2a72"}}>Our Story</h2>
                  <h5>It started with a frustration we've all felt.</h5>
                  <p>
                    We watched businesses — startups, growing companies, even established enterprises — struggle with the same problem: too many tools
                    that don't talk to each other. One system for HR. Another for sales. A third for accounting. A fourth for projects. And somehow, a
                    fifth just to make the other four work together.
                  </p>
                  <p>
                    The result? Data silos. Integration nightmares. Wasted hours. Wasted money. And teams that spend more time managing tools than
                    actually doing meaningful work.
                  </p>
                  <p>
                    We asked ourselves: <strong>What if there was one platform that did it all?</strong>
                  </p>
                  <p>
                    Not a patchwork of acquired products stitched together. Not a bloated enterprise system that takes 6 months to implement. But a
                    truly unified platform — designed from the ground up to handle your people, your customers, your finances, and your operations in
                    one seamless experience.
                  </p>
                  <p>
                    That's why we built <strong>The Eazy.</strong>
                  </p>
                </div>
              </div>
              <div className="lg:col-5 sticky-element">
                <div className="uc-sticky-placeholder" style={{ height: 0, width: 0, margin: 0 }} hidden="" />
                <div className="panel vstack items-start gap-2 uc-sticky">
                  {/* <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                    <span className="fs-8 fw-bold text-uppercase">FAQs</span>
                  </div> */}
                  <img className="our-zuno-image" src="/assets/images/zuno/zuno-explaination.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
