import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomeOneFeatures() {
  const [activeTab, setActiveTab] = useState(1);

  const PointCard = ({ points }) => (
    <div
      className="points-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        marginTop: "12px",
      }}>
      {points.map((point, idx) => (
        <div
          key={idx}
          className="point-card-item"
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            // background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            // border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.25s ease",
            cursor: "default",
          }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: "700",
              color: "#fff",
              background: "linear-gradient(135deg, #2a2a72, #1338be)",
              padding: "4px 8px",
              borderRadius: "6px",
              flexShrink: 0,
              minWidth: "28px",
              textAlign: "center",
            }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "#334155",
              lineHeight: "1.4",
            }}>
            {point}
          </span>
        </div>
      ))}
      <style jsx>{`
        .point-card-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #6366f1 !important;
          background: linear-gradient(135deg, #fff 0%, #f8fafc 100%) !important;
        }

        :global(.dark) .point-card-item {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
          border-color: #334155 !important;
        }

        :global(.dark) .point-card-item span:last-child {
          color: #e2e8f0 !important;
        }

        @media (max-width: 640px) {
          .points-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );

  const peopleManagementPoints = [
    "Recruitment & Applicant Tracking",
    "Employee Records & Self-Service Portal",
    "Attendance, Leaves & Shift Management",
    "100% Compliant Indian Payroll (EPF/ESI/TDS)",
    "Performance Management & Reviews",
    "Learning & Development (LMS)",
  ];

  const salesCRMPoints = [
    "Lead Capture & AI-Powered Scoring",
    "Visual Pipeline & Deal Management",
    "WhatsApp, Email & SMS Campaigns",
    "Quotations & Professional Invoicing",
    "Customer Success & Retention Tools",
    "Sales Analytics & Forecasting",
  ];

  const financePoints = [
    "Accounting & Chart of Accounts",
    "Bank Reconciliation & GST Compliance",
    "Expense Management & Approvals",
    "Inventory & Warehouse Management",
    "Purchase Orders & Vendor Management",
    "Asset Tracking & Depreciation",
  ];

  const projectsPoints = [
    "Project Planning & Milestone Tracking",
    "Tasks, Sprints & Kanban Boards",
    "Time Tracking & Timesheets",
    "Team Productivity Monitoring",
    "Client & Vendor Management",
    "Resource Allocation & Utilization",
  ];

  const aiAnalyticsPoints = [
    "Predictive Analytics & Forecasting",
    "AI-Powered Smart Recommendations",
    "Automated Insights & Anomaly Detection",
    "Natural Language Query Search",
    "Sales Intelligence & Lead Scoring",
    "Workforce Intelligence & Retention Analysis",
  ];

  return (
    <div id="main_features" className="main-features section panel overflow-hidden">
      <div className="section-outer panel pb-6 xl:pb-6">
        <div className="container max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});">
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                <span className="fs-8 fw-bold text-uppercase text-black">Smart</span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                {" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5 mt-2">
                  Everything You Need
                </span>{" "}
                to run your business
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator.
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel px-3 rounded-2 border dark:bg-gray-800">
                <ul
                  className="main-features-nav hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist">
                  <li className={`${activeTab == 1 ? "uc-active" : ""}`} onClick={() => setActiveTab(1)} role="presentation">
                    <a className="h6 lg:h5 text-nowrap m-0">People Management</a>
                  </li>
                  <li onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? "uc-active" : ""}`} role="presentation">
                    <a className="h6 lg:h5 text-nowrap m-0">Sales & CRM</a>
                  </li>
                  <li className={`${activeTab == 3 ? "uc-active" : ""}`} onClick={() => setActiveTab(3)} role="presentation">
                    <a className="h6 lg:h5 text-nowrap m-0">Finance & Accounting</a>
                  </li>
                  <li className={`${activeTab == 4 ? "uc-active" : ""}`} onClick={() => setActiveTab(4)} role="presentation">
                    <a className="h6 lg:h5 text-nowrap m-0">Projects & Tasks</a>
                  </li>
                  <li className={`${activeTab == 5 ? "uc-active" : ""}`} onClick={() => setActiveTab(5)} role="presentation">
                    <a className="h6 lg:h5 text-nowrap m-0">AI & Analytics</a>
                  </li>
                </ul>
              </div>
              <div className="main-features-switcher uc-switcher overflow-hidden" role="presentation" style={{ touchAction: "pan-y pinch-zoom" }}>
                {activeTab == 1 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              className="media-cover image"
                              alt="Share tools quickly and confidently in minutes"
                              src="/assets/images/template/people-management.jpeg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">Manage Your Workforce Effortlessly</h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Hire the best talent, onboard them smoothly, manage attendance & leaves, run error-free payroll with 100%
                                    EPF/ESI/TDS compliance, and develop high performers — all from one unified platform.
                                  </p>
                                  <PointCard points={peopleManagementPoints} />
                                  <Link to="#" className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2">
                                    <span>Explore People Solutions</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              className="media-cover image"
                              alt="Connect every part of your entire business"
                              src="/assets/images/template/sales-and-crm.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">Close More Deals with Smart CRM</h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Capture every lead, nurture them through your pipeline, and close deals faster with AI-powered insights. Run
                                    WhatsApp, email, and SMS campaigns, generate professional quotations, and track your entire sales journey in one
                                    place.
                                  </p>
                                  <PointCard points={salesCRMPoints} />
                                  <a href="#" className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2">
                                    <span>Explore Sales Solutions</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              className="media-cover image"
                              alt="Maintain compliance and control your apps"
                              src="/assets/images/template/finance-and-accounting.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">Complete Financial Control & Compliance</h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Track every rupee, manage inventory, handle purchases, reconcile bank accounts, and get real-time financial
                                    visibility. GST-ready invoicing, automated expense management, and complete accounting — without switching to
                                    separate software.
                                  </p>
                                  <PointCard points={financePoints} />
                                  <Link to="#" className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2">
                                    <span>Explore Finance Solutions</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 4 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              className="media-cover image"
                              alt="Review quickly and confidently"
                              src="/assets/images/template/projects-and-tasks.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">Deliver Projects On Time, Every Time</h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Plan projects, assign tasks, run agile sprints, track time, and monitor team productivity with complete
                                    visibility. From project planning to time tracking, manage everything your team needs to deliver exceptional
                                    results.
                                  </p>
                                  <PointCard points={projectsPoints} />
                                  <Link to="#" className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2">
                                    <span>Explore Project Solutions</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 5 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              className="media-cover image"
                              alt="Review quickly and confidently"
                              src="/assets/images/template/ai-and-analytics.png"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">Intelligence That Predicts & Recommends</h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Our AI doesn't just show you what happened — it tells you what's coming and what to do about it. Predict
                                    attendance issues, forecast sales, identify retention risks, and get actionable recommendations powered by
                                    advanced analytics.
                                  </p>
                                  <PointCard points={aiAnalyticsPoints} />
                                  <Link to="#" className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2">
                                    <span>Explore AI Features</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}