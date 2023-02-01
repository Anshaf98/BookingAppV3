import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <section id="ts-service-area" className="ts-service-area pb-0">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">We Are Specialists In</h2>
            <h3 className="section-sub-title">What We Do</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <i class="fa fa-home"></i>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/">Home Construction</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <i class="fa fa-server"></i>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/">Building Remodels</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <i class="fas fa-ruler"></i>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/">Interior Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <img
              loading="lazy"
              className="img-fluid"
              src="https://images.pexels.com/photos/4681973/pexels-photo-4681973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <i class="fas fa-ruler"></i>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/">Exterior Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <i class="fas fa-ruler"></i>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/">Renovation</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <i class="fas fa-ruler"></i>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/">Safety Management</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
