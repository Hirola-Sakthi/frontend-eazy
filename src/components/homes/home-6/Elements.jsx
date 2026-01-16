import { slideData, slideData2, slides } from "@/data/elements";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Elements() {
  return (
    <div
      id="builder_elements"
      className="builder-elements section panel  scrollSpysection"
    >
      <div className="section-outer panel pb-6 lg:pb-8 xl:pb-6">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel vstack items-center gap-3 xl:gap-4 text-center max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <h4 className="h4 m-0">Solutions Tailored for Your Industry</h4>
            <div className="panel w-100">
              <Swiper
                className="swiper mask-x"
                slidesPerView={2.5}
                spaceBetween={12}
                centeredSlides={false}
                loop={true}
                loopAdditionalSlides={slideData.length}
                modules={[Autoplay]}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                  reverseDirection: true,
                }}
                speed={3000}
                allowTouchMove={false}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide className="swiper-slide " style={{width: "fit-content"}} key={index}>
                    <div className="cstack gap-1 md:gap-2 p-1 md:p-1 border rounded-pill">
                      <slide.Icon
                        className="icon icon-1 md:icon-2 lg:icon-2 dark:text-secondary"
                        width={28}
                        height={28}
                        aria-label={slide.alt}
                      />
                      <span className="fs-7 md:fs-7 lg:fs-8 fw-medium">
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                style={{ transform: "rotate(180deg) !importent" }}
                className="swiper mask-x my-2 md:my-3"
                slidesPerView={2.5}
                slidesPerGroup={1}
                spaceBetween={16}
                modules={[Autoplay]}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                }}
                speed={3000}
                allowTouchMove={false}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index} style={{width: "fit-content"}}>
                    <div className="cstack gap-1 md:gap-2 p-1 md:p-1 border rounded-pill">
                      <slide.Icon
                        className="icon icon-1 md:icon-2 lg:icon-2 dark:text-secondary"
                        width={28}
                        height={28}
                        aria-label={slide.alt}
                      />
                      <span className="fs-7 md:fs-7 lg:fs-7 fw-medium">
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper mask-x"
                slidesPerView={2.5}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                  reverseDirection: true,
                }}
                speed={3000}
                allowTouchMove={false}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                {slideData2.map((slide, index) => (
                  <SwiperSlide key={index} style={{width: "fit-content"}}>
                    <div className="cstack gap-1 md:gap-2 p-1 md:p-1 border rounded-pill">
                      <slide.Icon
                        className="icon icon-1 md:icon-2 lg:icon-2 dark:text-secondary"
                        width={28}
                        height={28}
                        aria-label={slide.alt}
                      />
                      <span className="fs-7 md:fs-7 lg:fs-7 fw-medium">
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <a
              href="#"
              className="btn btn-sm lg:btn-md btn-primary easy-main-gradient px-3 md:mt-2 lg:mt-4"
            >
              <span>View all elements</span>
              <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}