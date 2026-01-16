import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";
import { blogsList } from "../../api/blogs/blogs.api";

export default function Blogs5() {
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
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="section py-3 sm:py-6 lg:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header className="page-header vstack justify-center items-center text-center max-w-500px mx-auto">
            <h1 className="h4 lg:h1">Latest Blog Posts</h1>
            <p className="fs-6 lg:fs-5 opacity-60">
              Discover our latest articles, insights, and stories
            </p>
          </header>

          {loading ? (
            <div className="text-center py-6">
              <p className="fs-5">Loading blogs...</p>
            </div>
          ) : error ? (
            <div className="text-center py-6">
              <p className="fs-5 text-red-500">{error}</p>
            </div>
          ) : blogsData.length === 0 ? (
            <div className="text-center py-6">
              <p className="fs-5 opacity-60">No blogs available yet.</p>
            </div>
          ) : (
            <div className="row g-4 xl:g-8">
              <div className="col">
                <div className="panel text-center">
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                    {blogsData.slice(0, 12).map((elm) => (
                      <div key={elm._id}>
                        <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800 h-100">
                          {/* Category Badge */}
                          {elm.categoryName && (
                            <Link
                              className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                              to={`/blog-category/${elm.category?.slug || 'uncategorized'}`}
                              style={{ borderRadius: 8 }}
                            >
                              {elm.categoryName}
                            </Link>
                          )}

                          {/* Featured Image */}
                          <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                            {elm.featuredImage ? (
                              <img
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src={elm.featuredImage}
                                width={1280}
                                height={853}
                                alt={elm.title}
                                style={{ objectFit: 'cover' }}
                              />
                            ) : (
                              <div className="w-100 h-100 bg-gray-200 dark:bg-gray-700 d-flex align-items-center justify-content-center">
                                <span className="fs-5 opacity-50">No Image</span>
                              </div>
                            )}
                            <Link
                              to={`/blog-details/${elm.slug}`}
                              className="position-cover"
                            ></Link>
                          </figure>

                          {/* Blog Header */}
                          <header className="panel vstack items-center gap-2 px-2">
                            <h3 className="h6 sm:h5 m-0">
                              <Link
                                className="text-none"
                                to={`/blog-details/${elm.slug}`}
                              >
                                {elm.title.length > 40 ? elm.title.slice(0, 40) + "..." : elm.title}
                              </Link>
                            </h3>

                            {/* Excerpt */}
                            {elm.excerpt && (
                              <p className="fs-7 text-gray-600 dark:text-gray-400 m-0 line-clamp-2">
                                {elm.excerpt.substring(0, 50)}...
                              </p>
                            )}

                            {/* Meta Information */}
                            <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300">
                              {/* Author */}
                              {elm.authorName && (
                                <li>
                                  <div className="hstack gap-narrow ft-tertiary">
                                    <i className="unicon-user-circle fs-6"></i>
                                    <span className="fw-medium text-dark dark:text-white">
                                      {elm.authorName}
                                    </span>
                                  </div>
                                </li>
                              )}

                              {/* Date */}
                              {elm.publishedAt && (
                                <>
                                  <li className="opacity-50">•</li>
                                  <li>
                                    <div className="hstack gap-narrow">
                                      <i className="unicon-calendar fs-6"></i>
                                      <span style={{color: '#000'}}>{formatDate(elm.publishedAt)}</span>
                                    </div>
                                  </li>
                                </>
                              )}

                              {/* Views */}
                              {elm.views !== undefined && (
                                <>
                                  <li className="opacity-50">•</li>
                                  <li>
                                    <div className="hstack gap-narrow">
                                      <i className="unicon-eye fs-6"></i>
                                      <span style={{color: '#000'}}>{elm.views} views</span>
                                    </div>
                                  </li>
                                </>
                              )}

                              {/* Read Time */}
                              {elm.readTime && (
                                <>
                                  <li className="opacity-50">•</li>
                                  <li>
                                    <div className="hstack gap-narrow">
                                      <i className="unicon-clock fs-6"></i>
                                      <span style={{color: '#000'}}>{elm.readTime} min</span>
                                    </div>
                                  </li>
                                </>
                              )}
                            </ul>

                            {/* Tags */}
                            {elm.tags && elm.tags.length > 0 && (
                              <div className="hstack gap-1 flex-wrap justify-center mt-1">
                                {elm.tags.slice(0, 3).map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="badge rounded-3 easy-main-gradient text-white fs-8 px-2 py-narrow"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </header>
                        </article>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {blogsData.length > 12 && (
                    <div className="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
                      <ul
                        className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary"
                        data-uc-margin=""
                      >
                        <Pagination />
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
