import { brands2 } from "@/data/brands";
import React from "react";

export default function Brands() {
  return (
    <div
      id="clients_brands"
      className="clients-brands section panel overflow-hidden  scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:pt-6 xl:pt-8">
        <div className="container xl:max-w-lg">
          <div className="section-inner panel vstack gap-3 xl:gap-4 text-center">
            <h4
              className="h4 px-8"
              data-anime="onview: -100; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0"
            >
             Trusted by teams building better businesses
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
