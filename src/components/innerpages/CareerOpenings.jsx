import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "@/backendUrl";

export default function CareerOpenings() {
  const [jobListings, setJobListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch published jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${backendUrl}/api/v1/website/jobs`);

        if (response.data.success) {
          // Filter only published jobs for public display
          const publishedJobs = response.data.jobs.filter((job) => job.status === "published");
          setJobListings(publishedJobs);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job openings. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div id="career_openings" className="career-openings section panel overflow-hidden pb-6 xl:pb-9">
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto">
              <h2
                className="h4 sm:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;">
                Current openings
              </h2>

              {/* Loading State */}
              {isLoading && (
                <div className="panel w-full flex justify-center py-8">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Error State */}
              {error && !isLoading && (
                <div className="panel w-full text-center py-8">
                  <p className="text-red-500 dark:text-red-400">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Try Again
                  </button>
                </div>
              )}

              {/* Empty State */}
              {!isLoading && !error && jobListings.length === 0 && (
                <div className="panel w-full text-center py-8">
                  <p className="text-dark dark:text-white text-opacity-70">No open positions at the moment. Check back soon!</p>
                </div>
              )}

              {/* Job Listings */}
              {!isLoading && !error && jobListings.length > 0 && (
                <div className="panel w-full">
                  <div
                    className="row child-cols-12 sm:child-cols-6 col-match g-2 sm:g-3"
                    data-uc-grid=""
                    data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                    {jobListings.map((job, index) => (
                      <div key={job._id || index}>
                        <div className="panel vstack justify-end items-end gap-1 p-3 rounded lg:rounded-2 bg-white dark:bg-gray-800">
                          <div className="vstack gap-narrow w-full">
                            <div className="hstack gap-1 flex-wrap">
                              <h5 className="h6 lg:h5 m-0">{job.title}</h5>
                              {job.urgent && (
                                <span className="px-1.5 py-0.5 fs-8 font-bold uppercase bg-red-100 text-red-600 rounded">Urgent</span>
                              )}
                              {job.featured && (
                                <span className="px-1.5 py-0.5 fs-6 font-bold uppercase bg-yellow-100 text-yellow-600 rounded">Featured</span>
                              )}
                            </div>
                            <span className="fs-6 text-dark dark:text-white text-opacity-70">{job.location}</span>
                            <div className="hstack gap-1 flex-wrap mt-1">
                              {job.type && <span className="px-2 py-0.5 fs-7 font-medium bg-primary/10 text-primary rounded-3">{job.type}</span>}
                              {job.remote && <span className="px-2 py-0.5 fs-7 font-medium bg-green-100 text-green-600 rounded">Remote</span>}
                            </div>
                          </div>
                          <Link
                            to={`/page-career-detail/${job._id}`}
                            className="uc-link fs-7 fw-bold d-inline-flex items-center gap-narrow border-bottom pb-narrow">
                            <span>Apply now</span>
                            <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
