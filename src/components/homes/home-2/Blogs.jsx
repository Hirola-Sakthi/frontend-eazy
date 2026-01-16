// import { articles } from "@/data/blogs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogsList } from "../../../api/blogs/blogs.api";

export default function Blogs() {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogsList();

      console.log("Fetched blogs data:", response);
      if (response.success) {
        setBlogsData(response.blogs);
      } else if (response.error) {
        setError(response.error);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div
      id="blog_posts"
      className="section panel overflow-hidden gap-3 bg-secondary dark:bg-gray-800"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center">
                Gain valuable insights
              </h2>
              <div className="panel">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                  {blogsData.slice(0, 2).map((elm) => (
                    <div key={elm._id}>
                      <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-white dark:bg-gray-800">
                        <Link
                          className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                          to={`/blog-category/${
                            elm.category?.slug || "uncategorized"
                          }`}
                          style={{ borderRadius: 8 }}
                        >
                          {elm.categoryName}
                        </Link>
                        <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                          <img
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.featuredImage}
                            width={1280}
                            height={854}
                            alt={elm.featuredImage}
                          />
                          <Link
                            to={`/blog-details/${elm.slug}`}
                            className="position-cover"
                            data-caption={elm.featuredImage}
                          ></Link>
                        </figure>
                        <header className="panel vstack items-center gap-1 lg:gap-2 px-2">
                          <h3 className="h5 xl:h4 m-0 text-center m-0">
                            <Link
                              className="text-none"
                              to={`/blog-details/${elm.slug}`}
                            >
                              {elm.title.length > 40
                                ? elm.title.slice(0, 40) + "..."
                                : elm.title}
                            </Link>
                          </h3>
                          <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <img
                                  src={elm.featuredImage}
                                  width={150}
                                  height={150}
                                  alt={elm.authorName}
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  to={`/blog-author/Amir Khan`}
                                  className="text-none fw-bold text-dark dark:text-white"
                                >
                                  {elm.authorName}
                                </Link>
                              </div>
                            </li>
                            <li className="opacity-50">•</li>
                            <li>
                              <div className="post-date hstack gap-narrow">
                                <span>{formatDate(elm.publishedAt)}</span>
                              </div>
                            </li>
                          </ul>
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to={`/blog`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>View more articles</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
