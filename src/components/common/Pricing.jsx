import { tiers3 } from "@/data/pricing";
import React from "react";
import { usePricingPlans } from "@/api/content";

export default function Pricing({ useBackend = true }) {
  // Fetch data from backend if useBackend is true
  const { pricingPlans: backendPlans, loading } = usePricingPlans();

  // Transform backend data to match the expected format
  const tiers = useBackend && backendPlans.length > 0
    ? backendPlans.map(plan => ({
        title: plan.title,
        description: plan.description,
        price: plan.price,
        yearlyPrice: plan.yearlyPrice || null,
        priceDetails: plan.priceInfo || plan.description,
        linkText: plan.buttonLabel,
        linkSubtext: plan.isPopular ? 'No credit card required' : '',
        features: plan.features || [],
        isPopular: plan.isPopular
      }))
    : tiers3;

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1">
                  Simple, scalable pricing.
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {tier.priceDetails}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <a
                                href={"#"}
                                className={`btn btn-md sm:btn-sm lg:btn-md ${
                                  tier.title === "Enterprise"
                                    ? "btn-dark"
                                    : "btn-primary"
                                } text-white`}
                              >
                                {tier.linkText}
                              </a>
                              <span className="fs-7 opacity-70 min-h-24px">
                                {tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.title === "Essentials"
                                ? "Key features:"
                                : `Everything in ${
                                    tier.title === "Business"
                                      ? "Essentials"
                                      : "Business"
                                  }, plus:`}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-center text-gray-900 dark:text-white text-opacity-70"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Prices exclude any applicable taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
