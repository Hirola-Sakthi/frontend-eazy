import React from "react";

export function PartnerProcess() {
  const steps = [
    { title: "Apply", desc: "Submit your partner application." },
    { title: "Screen", desc: "We review and verify your profile." },
    { title: "Onboard", desc: "Training, docs and sandbox access." },
    { title: "Grow", desc: "Start selling and co-market together." },
  ];

  return (
    <div id="partner-process" className="partner-process section panel">
      <div className="section-outer panel py-4 md:py-6 xl:py-8">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 text-center mb-4"
              data-anime="onview: -150; targets: >*; translateY: [20, 0]; opacity: [0, 1]; duration: 500;">
              <h2 className="h3 sm:h2 lg:h1 m-0">How it works</h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 text-opacity-70">A simple 4-step process to become a certified partner.</p>
            </div>

            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-3">
              {steps.map((s, i) => (
                <div key={i} className="col">
                  <div className="panel p-4 border rounded-1-5 bg-white/03 vstack gap-2 items-start">
                    <div className="cstack gap-2 items-center">
                      <div className="badge row items-center justify-center w-24px rounded-pill bg-primary text-white">{i + 1}</div>
                      <div className="fw-bold fs-5" style={{paddingLeft: '10px'}}>{s.title}</div>
                    </div>
                    <div className="fs-7 text-opacity-70">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
