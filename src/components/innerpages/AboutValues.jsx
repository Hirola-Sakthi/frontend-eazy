import { panelsData } from "@/data/plans";
import React from "react";

export default function AboutValues() {
  return (
    <div
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Our Promise
              </h2>
              <p className="text-center" style={{ marginTop: "-20px"}}>We're not here to sell you software and disappear. We're here to be your partner in growth.</p>
              <div
                // className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between"
               className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-6 lg:g-8 col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {panelsData.map((panel) => (
                  <div key={panel.id}>
                      <div className="panel vstack gap-2 p-5 lg:p-3 rounded-2 bg-secondary dark:bg-gray-800 h-100px w-300px">
                      <img
                        className="w-48px lg:w-48px d-block dark:d-none"
                        src={panel.lightImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                      <img
                        className="w-48px lg:w-48px d-none dark:d-block"
                        src={panel.darkImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                      <h5 className="h5 lg:h4 m-0">{panel.title}</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
