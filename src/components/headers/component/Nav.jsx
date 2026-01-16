import { Link, useLocation } from "react-router-dom";

import { pagesData } from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      <li>
        <Link to={`/page-features`}>Features</Link>
      </li>
      <li>
        <Link to={`/page-pricing`}>Pricing</Link>
      </li>
      <li>
        <Link to={`/blog`}>Insights</Link>
      </li>
      <li>
        <Link to={`/about-us`}>About</Link>
      </li>
      <li>
        <Link to={`/contact-us`}>Contact</Link>
      </li>
      <li className="has-dd-menu">
        <a role="button" aria-haspopup="true">
          More{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div className={`uc-navbar-dropdown uc-drop w-100`}>
          <div
            className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack"
            data-uc-grid=""
          >
            <div>
              <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
                {pagesData.map((section, index) => (
                  <div key={index}>
                    <ul className="uc-nav uc-navbar-dropdown-nav">
                      <li className="uc-nav-header">{section.header}</li>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {item.href.startsWith("/") ? (
                            <Link
                              to={item.href}
                              className={
                                pathname.split("/")[1] ==
                                item.href.split("/")[1]
                                  ? "menuActive"
                                  : "inActiveMenu"
                              }
                            >
                              {item.label}
                              {item.badge && (
                                <span
                                  className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </Link>
                          ) : (
                            <a href={item.href}>
                              {item.label}
                              {item.badge && (
                                <span
                                  className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="panel w-100 overflow-hidden">
                <div className="ratio ratio-3x4 overflow-hidden rounded">
                  <img
                    alt="Let's build anything with Eazy!"
                    src="/assets/images/template/menu-banner.jpg"
                    width="544"
                    height="660"
                  />
                  <a
                    className="position-cover"
                    href="https://themeforest.net/user/ib-themes/portfolio"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
