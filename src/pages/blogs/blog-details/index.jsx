import Header4 from "@/components/headers/Header4";
import Newsletter from "@/components/blog/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "@/api/blogs/blogs.api";
import MetaComponent from "@/components/common/MetaComponent";

export default function BlogDetailsPage1() {
  let params = useParams();
  const slug = params.id; // Support both slug and id parameters
  const [blogItem, setBlogItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await getBlogBySlug(slug);

        if (response.error) {
          setError(response.error);
        } else {
          setBlogItem(response.blog);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const metadata = {
    title: blogItem?.metaTitle || blogItem?.title || "Blog Details || Eazy",
    description: blogItem?.metaDescription || blogItem?.excerpt || "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          {loading ? (
            <div className="container max-w-xl py-9 text-center">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="container max-w-xl py-9 text-center">
              <p className="text-red-500">{error}</p>
            </div>
          ) : blogItem ? (
            <>
              <BlogDetails1 blogItem={blogItem} />
              <Newsletter />
            </>
          ) : (
            <div className="container max-w-xl py-9 text-center">
              <p>Blog not found</p>
            </div>
          )}
        </div>
        <Footer1 />
      </div>
    </>
  );
}
