import { Link } from "react-router-dom";
import RelatedBlogs from "./RelatedBlogs";
import { useEffect, useState } from "react";
import { getRelatedBlogs } from "@/api/blogs/blogs.api";
import DOMPurify from "dompurify";

export default function BlogDetails1({ blogItem }) {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      if (blogItem?.slug) {
        const response = await getRelatedBlogs(blogItem.slug, 3);
        if (response.blogs) {
          setRelatedBlogs(response.blogs);
        }
      }
    };

    fetchRelated();
  }, [blogItem?.slug]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9 mt-6">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              {/* Category Badge */}
              {blogItem.categoryName && (
                <div className="panel">
                  <span className="badge bg-primary text-white px-3 py-1 rounded-pill">
                    {blogItem.categoryName}
                  </span>
                </div>
              )}

              {/* Title */}
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>

                {/* Meta Info */}
                <div className="panel hstack gap-2 flex-wrap justify-center text-sm text-gray-600 dark:text-gray-400">
                  {blogItem.authorName && (
                    <div className="hstack gap-1">
                      <span>By {blogItem.authorName}</span>
                    </div>
                  )}
                  {blogItem.publishedAt && (
                    <>
                      <span>•</span>
                      <span>{formatDate(blogItem.publishedAt)}</span>
                    </>
                  )}
                  {blogItem.readTime && (
                    <>
                      <span>•</span>
                      <span>{blogItem.readTime} min read</span>
                    </>
                  )}
                  {blogItem.views && (
                    <>
                      <span>•</span>
                      <span>{blogItem.views} views</span>
                    </>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              {blogItem.featuredImage && (
                <figure className="featured-image m-0">
                  <figure className="featured-image m-0 rounded ratio ratio-2x1 uc-transition-toggle overflow-hidden">
                    <img
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt={blogItem.title}
                      src={blogItem.featuredImage}
                      width="1280"
                      height="640"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </figure>
                </figure>
              )}
            </div>
          </div>
        </div>

        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            {/* Excerpt */}
            {blogItem.excerpt && (
              <div className="panel mb-6 p-4 rounded-2">
                <p className="fs-4 italic text-gray-700 dark:text-gray-300 m-0">
                  {blogItem.excerpt}
                </p>
              </div>
            )}

            {/* Blog Content with proper styling for images and text */}
            <div
              className="post-content panel fs-6 md:fs-5"
              style={{
                lineHeight: '1.8',
              }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                  .post-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 1.5rem auto;
                    display: block;
                  }
                  .post-content p {
                    margin-bottom: 1rem;
                    color: #000000;
                  }
                  .post-content h1, .post-content h2, .post-content h3,
                  .post-content h4, .post-content h5, .post-content h6 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    color: #000000;
                  }
                  .post-content ul, .post-content ol {
                    margin: 1rem 0;
                    padding-left: 2rem;
                  }
                  .post-content blockquote {
                    border-left: 4px solid #3b82f6;
                    padding-left: 1rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #6b7280;
                  }
                  .post-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                  }
                  .post-content table th,
                  .post-content table td {
                    border: 1px solid #e5e7eb;
                    padding: 0.75rem;
                  }
                  .post-content table th {
                    background-color: #f3f4f6;
                    font-weight: 600;
                  }
                  .post-content pre {
                    background-color: #1f2937;
                    color: #f3f4f6;
                    padding: 1rem;
                    border-radius: 8px;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                  }
                  .post-content code {
                    background-color: #f3f4f6;
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                    font-family: 'Courier New', monospace;
                  }
                  .post-content a {
                    color: #3b82f6;
                    text-decoration: underline;
                  }
                  .post-content a:hover {
                    color: #2563eb;
                  }
                `
              }} />
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogItem.content) }} />
            </div>

            {/* Tags */}
            {blogItem.tags && blogItem.tags.length > 0 && (
              <div className="post-footer panel vstack sm:hstack gap-3 justify-between border-top py-4 mt-6 xl:py-6 xl:mt-8">
                <ul className="nav-x gap-narrow flex-wrap">
                  <li>
                    <span className="text-black dark:text-white me-narrow font-semibold">
                      Tags:
                    </span>
                  </li>
                  {blogItem.tags.map((tag, index) => (
                    <li key={index}>
                      <a href={`#${tag}`} className="gap-0">
                        {tag}
                        {index < blogItem.tags.length - 1 && (
                          <span className="text-black dark:text-white">,</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Info */}
            {blogItem.author && (
              <div className="post-author panel py-4 px-3 sm:p-4 xl:p-6 bg-gray-25 dark:bg-opacity-5 rounded-lg lg:rounded-2xl mt-6">
                <div className="panel vstack gap-3">
                  <h4 className="h5 m-0">About the Author</h4>
                  <div className="panel vstack items-start gap-2">
                    <h5 className="h6 m-0">{blogItem.authorName || blogItem.author.username}</h5>
                    {blogItem.author.email && (
                      <p className="fs-6 text-gray-600 dark:text-gray-400 m-0">
                        {blogItem.author.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
              <div className="post-related panel border-top pt-6 mt-8 xl:mt-9">
                <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related Articles:</h4>
                <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 gx-3 gy-4">
                  {relatedBlogs.map((blog) => (
                    <div key={blog._id}>
                      <article className="post panel vstack gap-3 p-2 border rounded-2">
                        {blog.featuredImage && (
                          <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                            <img
                              className="media-cover opacity-1 image uc-transition-scale-up"
                              src={blog.featuredImage}
                              alt={blog.title}
                              style={{ objectFit: 'cover', opacity: 1 }}
                            />
                            <Link
                              to={`/blog/${blog.slug}`}
                              className="position-cover"
                            ></Link>
                          </figure>
                        )}
                        <div className="panel vstack gap-2">
                          {blog.categoryName && (
                            <span className="badge bg-primary text-white px-2 py-1 rounded-pill fs-7" style={{width: 'fit-content'}}>
                              {blog.categoryName}
                            </span>
                          )}
                          <h6 className="h6 m-0">
                            <Link
                              to={`/blog-details/${blog.slug}`}
                              className="text-none"
                            >
                              {blog.title}
                            </Link>
                          </h6>
                          {blog.excerpt && (
                            <p className="fs-7 text-gray-600 dark:text-gray-400 m-0">
                              {blog.excerpt.substring(0, 100)}...
                            </p>
                          )}
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
