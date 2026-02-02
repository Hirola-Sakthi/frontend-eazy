import Context from "@/context/Context";
import "./styles/style.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import anime from "animejs";

import MobileMenu from "@/components/headers/component/MobileMenu";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactModal from "@/components/modals/ContactModal";
import NewsletterModal from "@/components/modals/NewsletterModal";
import SearchModal from "@/components/modals/SearchModal";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import HomePage1 from "./pages";
import FeaturesPage from "./pages/innerPages/page-features";
import PricingPage from "./pages/innerPages/page-pricing";
import AboutPage from "./pages/innerPages/page-about";
import CareerPage from "./pages/innerPages/page-career";
import ContactPage from "./pages/innerPages/page-contact";
import Blog4ColsPage from "./pages/blogs/blog-4cols";
import BlogDetailsPage1 from "./pages/blogs/blog-details";
import SignupPage1 from "./pages/othersPages/sign-up";
import SigninPage1 from "./pages/othersPages/sign-in";
import ResetPasswordPage from "./pages/othersPages/reset-password";
import NotFoundPage from "./pages/not-found";
import CommingSoonPage from "./pages/othersPages/coming-soon";
import TermsPage from "./pages/othersPages/page-terms";
import PrivacyPage from "./pages/othersPages/page-privacy";
import ShopcheckoutPage2 from "./pages/shop/shop-checkout-2";
import ShopOrder from "./pages/shop/shop-order";
import IntegrationPage from "./pages/innerPages/page-integrations";
import CareerDetailsPage from "./pages/innerPages/page-career-detail";
import BlogCategoryPage from "./pages/blogs/blog-category";
import BlogAuthorPage from "./pages/blogs/blog-author";
import SigninPage2 from "./pages/othersPages/sign-in-2";
import SignupPage2 from "./pages/othersPages/sign-up-2";
import ResetPasswordPage2 from "./pages/othersPages/reset-password-2";
import PartnerPage from "./pages/partnerPage";
import CareerPortalPage from "./pages/innerPages/career/CareerPage";
import ServicesPage from "./pages/services"
import ServiceDetail from "./pages/services/ServiceDetail";
import DynamicPage from "./pages/DynamicPage";
import DesignPage from "./pages/innerPages/design-page";
import DesignPage2 from "./pages/innerPages/design-page-2";
import DesignPage3 from "./pages/innerPages/design-page-3";
import DesignPage4 from "./pages/innerPages/design-page-4";
import DesignPage5 from "./pages/innerPages/design-page-5";
import DesignPage6 from "./pages/innerPages/design-page-6";
import DesignPage7 from "./pages/innerPages/design-page-7";
import DesignPage8 from "./pages/innerPages/design-page-8";
import DesignPage9 from "./pages/innerPages/design-page-9";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const dataAnime = element.getAttribute("data-anime");

          const modifieddataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          if (modifieddataAnime) {
            const parseAnimeData = (data) => {
              const settings = {};
              data.split(";").forEach((param) => {
                const [key, value] = param
                  .split(":")
                  .map((item) => item.trim());
                if (key && value) {
                  settings[key] = value;
                }
              });
              return settings;
            };

            const animeSettings = parseAnimeData(modifieddataAnime);

            let targets;
            if (animeSettings.targets === ">*") {
              targets = element.children;
            } else {
              targets = element.querySelectorAll(animeSettings.targets);
            }
            // console.log(animeSettings);

            // Apply Anime.js animation
            anime({
              loop: animeSettings.loop ? true : false,
              targets: targets,
              translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
              translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
              opacity: [0, 1],
              // direction: "alternate",
              easing: animeSettings.easing || "spring(1, 80, 10, 0)",
              duration: Number(animeSettings.duration) || 450,
              delay: animeSettings.delay
                ? animeSettings.delay.includes(",")
                  ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                      start: animeSettings.delay.split(",")[1] / 1,
                    })
                  : animeSettings.delay / 1
                : 0,
            });

            // Unobserve the element after animation triggers
            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0, // Trigger when 10% of the element is in view
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Clean up the observer on component unmount
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);
  return (
    <>
      <Context>
        <ParallaxProvider>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage1 />} />

              {/* <Route path="page-features" element={<FeaturesPage />} /> */}

              {/* <Route path="page-services" element={<ServicesPage />} /> */}
              {/* <Route path="services/:slug" element={<ServiceDetail />} /> */}

              {/* <Route path="page-pricing" element={<PricingPage />} /> */}
              <Route path="about-us" element={<AboutPage />} />
              <Route path="page-career" element={<CareerPage />} />
              <Route path="design-page" element={<DesignPage />} />
              <Route path="design-page-2" element={<DesignPage2 />} />
              <Route path="design-page-3" element={<DesignPage3 />} />
              <Route path="design-page-4" element={<DesignPage4 />} />
              <Route path="design-page-5" element={<DesignPage5 />} />
              <Route path="design-page-6" element={<DesignPage6 />} />
              <Route path="design-page-7" element={<DesignPage7 />} />
              <Route path="design-page-8" element={<DesignPage8 />} />
              <Route path="design-page-9" element={<DesignPage9 />} />






              {/* <Route path="page-career-new" element={<CareerPortalPage />} /> */}
              <Route path="contact-us" element={<ContactPage />} />

              {/* <Route path="page-integrations" element={<IntegrationPage />} />

              <Route
                path="page-career-detail/:id"
                element={<CareerDetailsPage />}
              />

              <Route path="blog" element={<Blog4ColsPage />} />
              <Route path="blog-details/:id" element={<BlogDetailsPage1 />} />


              <Route
                path="blog-category/:category"
                element={<BlogCategoryPage />}
              />
              <Route path="blog-author/:author" element={<BlogAuthorPage />} />

              <Route path="sign-up" element={<SignupPage1 />} />
              <Route path="sign-in" element={<SigninPage1 />} />
              <Route path="reset-password" element={<ResetPasswordPage />} /> */}
              <Route path="page-not-found" element={<NotFoundPage />} />
              {/* <Route path="coming-soon" element={<CommingSoonPage />} />

              <Route path="page/:slug" element={<DynamicPage />} /> */}

              <Route path="*" element={<NotFoundPage />} />
              <Route path="terms-and-conditions" element={<TermsPage />} />

              <Route path="privacy-policy" element={<PrivacyPage />} />

              {/* <Route path="sign-in-2" element={<SigninPage2 />} />

              <Route path="sign-up-2" element={<SignupPage2 />} />

              <Route path="reset-password-2" element={<ResetPasswordPage2 />} />

              <Route path="shop-checkout-2" element={<ShopcheckoutPage2 />} />
              <Route path="shop-order" element={<ShopOrder />} />
              <Route path="partner-page" element={<PartnerPage />} /> */}

              {/* main multipage */}
              {/* <Route
                path="main-multi-page"
                element={<Home1MainDemoMultiPage />}
              /> */}
            </Route>
          </Routes>
        </ParallaxProvider>
        <MobileMenu />
        <ContactModal />
        <NewsletterModal />
        <SearchModal />
        <BacktoTop />
        <ScrollTopBehaviour />
      </Context>
    </>
  );
}

export default App;
