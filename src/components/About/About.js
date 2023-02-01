import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./About.css";

const About = () => {
  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 c1">
            <h3 className="column-title">Who We Are</h3>
            <p>
              when Gregor Samsa woke from troubled dreams, he found himself
              transformed in his bed into a horrible vermin.
            </p>
            <blockquote>
              <p>
                Semporibus autem quibusdam et aut officiis debitis aut rerum est
                aut optio cumque nihil necessitatibus autemn ec tincidunt nunc
                posuere ut
              </p>
            </blockquote>
            <p>
              He lay on his armour-like back, and if he lifted. ultrices
              ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. If you are going to use a
              passage of Lorem Ipsum, you need to be sure there isn’t anything
              embarrassing.
            </p>
          </div>

          {/* left */}
          <div className="col-lg-6 mt-5 mt-lg-0 c2">
            <div id="page-slider" className="page-slider small-bg">
              <Swiper slidesPerView={1} autoplay={500}>
                <SwiperSlide>
                  <div
                    className="item"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/3585075/pexels-photo-3585075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    }}
                  >
                    <div className="container">
                      <div className="box-slider-content">
                        <div className="box-slider-text">
                          <h2 className="box-slide-title">Leadership</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="item"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/3585075/pexels-photo-3585075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    }}
                  >
                    <div className="container">
                      <div className="box-slider-content">
                        <div className="box-slider-text">
                          <h2 className="box-slide-title">Performance</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="item"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/3585075/pexels-photo-3585075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    }}
                  >
                    <div className="container">
                      <div className="box-slider-content">
                        <div className="box-slider-text">
                          <h2 className="box-slide-title">Relationships</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
