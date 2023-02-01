import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe no-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="subscribe-call-to-acton">
              <h3>Can We Help?</h3>
              <h4>(+9) 847-291-4353</h4>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="ts-newsletter row align-items-center">
              <div className="col-md-5 newsletter-introtext">
                <h4 className="text-white mb-0">Newsletter Sign-up</h4>
                <p className="text-white">Latest updates and news</p>
              </div>

              <div className="col-md-7 newsletter-form">
                <p>20% off This New One</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
