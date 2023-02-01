import React from "react";

const ContactForm = () => {
  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">Reaching our Office</h2>
            <h3 className="section-sub-title">Find Our Location</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fas fa-map-marker-alt mr-0"></i>
              </span>
              <div className="ts-service-box-content">
                <h4>Visit Our Office</h4>
                <p>9051 Constra Incorporate, USA</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fa fa-envelope mr-0"></i>
              </span>
              <div className="ts-service-box-content">
                <h4>Email Us</h4>
                <p>office@Constra.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fa fa-phone-square mr-0"></i>
              </span>
              <div className="ts-service-box-content">
                <h4>Call Us</h4>
                <p>(+9) 847-291-4353</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-60"></div>

        <div className="google-map">
          <div
            id="map"
            className="map"
            data-latitude="40.712776"
            data-longitude="-74.005974"
            data-marker="images/marker.png"
            data-marker-name="Constra"
          ></div>
        </div>

        <div className="gap-40"></div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="column-title">We love to hear</h3>
            <form id="contact-form" method="">
              <div className="error-container"></div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control form-control-name"
                      name="name"
                      id="name"
                      placeholder=""
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control form-control-email"
                      name="email"
                      id="email"
                      placeholder=""
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      className="form-control form-control-subject"
                      name="subject"
                      id="subject"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control form-control-message"
                  name="message"
                  id="message"
                  placeholder=""
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <br />
                <button className="btn btn-primary solid blank" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
