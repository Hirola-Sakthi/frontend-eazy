import React from "react";
import { Link } from "react-router-dom";
import {
  footerLinks as staticFooterLinks,
  socialLinks as staticSocialLinks,
} from "@/data/footer";
import { useFooter } from "@/api/content";

export default function Footer1({ useBackend = true }) {
  // Fetch data from backend if useBackend is true
  const { footer: backendFooter, loading } = useFooter();

  // Use backend data if available, otherwise fallback to static data
  const footerLinks =
    useBackend && backendFooter?.sections?.length > 0
      ? backendFooter.sections.map((section) => ({
          links: section.links.map((link) => ({
            href: link.href,
            label: link.label,
          })),
        }))
      : staticFooterLinks;

  const socialLinks =
    useBackend && backendFooter?.socialLinks?.length > 0
      ? backendFooter.socialLinks.map((link) => ({
          href: link.href,
          iconClass: link.iconClass,
        }))
      : staticSocialLinks;

  const settings = backendFooter?.settings || {};
  const copyrightText =
    settings.copyrightText || "Eazy © 2026, All rights reserved.";

  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:pt-8 lg:pb-3 xl:pt-6 xl:pb-3 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                {/* <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <p>
                        This powerfull tool eliminates the need to leave
                        Salesforce to get things done as I can create a custom
                        proposal with dynamic pricing tables.
                      </p>
                    </div>
                    <div className="hstack items-start gap-1">
                      <a href="#">
                        <img
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Google Play Store"
                          data-uc-svg=""
                          src="/assets/images/common/playstore.svg"
                          width="135"
                          height="40"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Apple Store"
                          data-uc-svg=""
                          src="/assets/images/common/appstore.svg"
                          width="134"
                          height="40"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))} */}
              </div>
            </div>
            <div
              className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white"
              style={{ flexDirection: "column" }}
            >
              <div
                className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2"
                style={{ flexDirection: "column" }}
              >
                <div className="footer-logo-wrapper">
                  <Link to="/">
                    <img
                      className="footer-logo-img"
                      alt="Eazy"
                      src="/assets/images/common/theEazy/footer-main-logo.svg"
                    />
                  </Link>
                </div>

                <p className="opacity-60">{copyrightText}</p>
                <ul className="nav-x gap-2 fw-medium">
                  <li>
                    <a href="/privacy-policy">Privacy Policies</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Cookie settings</a>
                  </li>
                </ul>
              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank">
                        <i
                          className={`icon icon-2 ${link.iconClass}`}
                          style={{
                            background:
                              "linear-gradient(135deg, #1338be, #2a2a72)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
