import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Siderdata from "./Siderdata";
import "./Content.css";

const Content = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="column-title">Testimonials</h3>

            <div id="testimonial-slide" className="testimonial-slide">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  800: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="quote-item">
                      <span className="quote-text">
                        Question ran over her cheek When she reached the first
                        hills of the Italic Mountains, she had a last view back
                        on the skyline of her hometown Bookmarksgrove, the
                        headline of Alphabet Village and the subline of her own
                        road.
                      </span>

                      <div className="quote-item-footer">
                        <img
                          loading="lazy"
                          className="testimonial-thumb"
                          src="https://images.pexels.com/photos/3774897/pexels-photo-3774897.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="testimonial"
                        />
                        <div className="quote-item-info">
                          <h3 className="quote-author">Gabriel Denis</h3>
                          <span className="quote-subtext">Chairman, OKT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <Siderdata />
                </SwiperSlide>
                <SwiperSlide>
                  <Siderdata />
                </SwiperSlide>
                <SwiperSlide>
                  <Siderdata />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
