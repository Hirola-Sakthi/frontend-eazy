import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header4 from "@/components/headers/Header4";
import Footer from "@/components/footers/Footer1";
import ServiceSectionRenderer from "@/components/services/ServiceSectionRenderer";
import { backendUrl } from '@/backendUrl';

import SecondRowImg1 from "../../../public/assets/images/common/second-row-img-1.svg";
import SecondRowImg2 from "../../../public/assets/images/common/second-row-img-2.svg";
import SecondRowImg3 from "../../../public/assets/images/common/second-row-img-3.svg";
import SecondRowImg4 from "../../../public/assets/images/common/second-row-img-4.svg";
import SecondRowImg5 from "../../../public/assets/images/common/second-row-img-5.svg";

import FirstRowImg1 from "../../../public/assets/images/common/first-row-img-1.svg";
import FirstRowImg2 from "../../../public/assets/images/common/first-row-img-2.svg";
import FirstRowImg3 from "../../../public/assets/images/common/first-row-img-3.svg";
import FirstRowImg4 from "../../../public/assets/images/common/first-row-img-4.svg";
import FirstRowImg5 from "../../../public/assets/images/common/first-row-img-5.svg";
import AnimatedIntegrationSVG from "../../components/homes/home-6/AnimatedSvg";

const API_URL = backendUrl || 'https://cms-eazy.onrender.com';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch service details
        const serviceResponse = await fetch(`${API_URL}/api/v1/website/services/slug/${slug}`);

        console.log("serviceResponse_serviceResponse",serviceResponse)
        if (!serviceResponse.ok) {
          throw new Error('Service not found');
        }
        const serviceData = await serviceResponse.json();
        console.log('🔍 Service data received:', serviceData);
        console.log('🔍 Service object:', serviceData.service);
        setService(serviceData.service);

        const sectionsResponse = await fetch(`${API_URL}/api/v1/website/service-sections/slug/${slug}`);
        if (sectionsResponse.ok) {
          const sectionsData = await sectionsResponse.json();
          console.log('📦 Sections data:', sectionsData);
          console.log('📦 Number of sections:', sectionsData.data?.length || 0);
          console.log('📦 Sections:', sectionsData.data);
          setSections(sectionsData.data || []);
        } else {
          console.error('❌ Failed to fetch sections:', sectionsResponse.status);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching service data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (slug) {
      fetchServiceData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="page-wrapper">
        <Header4 />
        <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading service details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  console.log('🔍 Before render - error:', error);
  console.log('🔍 Before render - service:', service);
  console.log('🔍 Before render - sections:', sections);

  if (error || !service) {
    console.log('⚠️ Showing error screen because:', { error, service });
    return (
      <div className="page-wrapper">
        <Header4 />
        <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center">
            <h2 className="text-danger mb-3">Service Not Found</h2>
            <p className="text-muted mb-4">{error || 'The service you are looking for does not exist.'}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/page-services')}
            >
              View All Services
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      style={{ overflow: "clip" }}
      className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
    >
      <Header4 />
      <div id="wrapper" className="wrap mt-4">
        <div className="integration-row">

          <div className="integration-col image-wrapper">
            <div className="svg-wrapper">
              <AnimatedIntegrationSVG />
            </div>

            <img
              src={FirstRowImg1}
              className="small-icon first-small1"
              alt=""
            />
            <img
              src={FirstRowImg2}
              className="small-icon first-small2"
              alt=""
            />
            <img
              src={FirstRowImg3}
              className="small-icon first-small3"
              alt=""
            />
            <img
              src={FirstRowImg4}
              className="small-icon first-small4"
              alt=""
            />
            <img
              src={FirstRowImg5}
              className="small-icon first-small5"
              alt=""
            />
          </div>

          <div
            id="overview"
            className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 scrollSpysection"
          >
            <div
              className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
              style={{ top: "0%" }}
            />
            <div
              className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
              style={{ top: "0%" }}
            />
            <div
              className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
              style={{ top: "0%" }}
            />
            <div className="section-outer panel pt-9 xl:pt-10">
              <div className="container xl:max-w-xl">
                <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
                  <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
                    <div>
                      <div
                        className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                        data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                      >
                        <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-black">
                          {service.title}
                        </h1>
                        {service.shortDescription && (
                          <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block">
                            {service.shortDescription}
                          </p>
                        )}
                        {!service.shortDescription && service.description && (
                          <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block">
                            {service.description}
                          </p>
                        )}
                        <a
                          href={service.heroConfig?.buttonLink || '/contact-us'}
                          className="btn btn-md lg:btn-lg btn-primary easy-main-gradient min-w-150px mt-2"
                        >
                          <span>{service.heroConfig?.buttonText || 'Get Started'}</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                        </a>
                        {service.price && (
                          <p className="fs-7 text-black dark:text-white">
                            Starting at {service.price}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <div
                        className="panel"
                        data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                      >
                        {(service.heroConfig?.heroImage || service.image) && (
                          <img
                            src={service.heroConfig?.heroImage || service.image}
                            alt={service.title}
                            className="dashboard-image w-100 rounded-2"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="integration-col image-wrapper">
            <div className="svg-wrapper mirror">
              <AnimatedIntegrationSVG />
            </div>
            <img
              src={SecondRowImg1}
              className="small-icon second-small1"
              alt=""
            />
            <img
              src={SecondRowImg2}
              className="small-icon second-small2"
              alt=""
            />
            <img
              src={SecondRowImg3}
              className="small-icon second-small3"
              alt=""
            />
            <img
              src={SecondRowImg4}
              className="small-icon second-small4"
              alt=""
            />
            <img
              src={SecondRowImg5}
              className="small-icon second-small5"
              alt=""
            />
          </div>

        </div>
      </div>

      {/* Service Sections */}
      <div className="service-sections">
        {(() => {
          console.log('🔍 Rendering sections - count:', sections.length);
          console.log('🔍 Sections state:', sections);
          return sections.length > 0 ? (
            sections.map((section, index) => {
              console.log(`🔍 Mapping section ${index}:`, section);
              return <ServiceSectionRenderer key={section._id || index} section={section} />;
            })
          ) : (
            <div className="container py-5 text-center">
              <p className="text-muted">No additional information available for this service.</p>
            </div>
          );
        })()}
      </div>

      {/* CTA Section */}
      <div className="service-cta" style={{
        padding: '80px 0',
        background: '#f8f9fa'
      }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead text-muted mb-5">
            Let's discuss how {service?.title} can help your business grow.
          </p>
          <a href="/contact-us" className="btn btn-primary btn-lg px-5">
            Contact Our Team
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
