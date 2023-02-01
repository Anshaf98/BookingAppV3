import React from "react";

const TeamItem = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
      <div className="ts-team-wrapper">
        <div className="team-img-wrapper">
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/3585075/pexels-photo-3585075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-fluid"
            alt="team-img"
          />
        </div>
        <div className="ts-team-content-classNameic">
          <h3 className="ts-name">Mark Conter</h3>
          <p className="ts-designation">Safety Officer</p>
          <p className="ts-description">
            Nats Stenman began his career in construction with boots on the
            ground
          </p>
          <div className="team-social-icons">
            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fab fa-google-plus"></i>
            </a>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
