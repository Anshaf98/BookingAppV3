import React from "react";
import "./Project.css";

const ProjectItem = () => {
  return (
    <div className="col-lg-4 col-md-6 shuffle-item">
      <div className="project-img-container">
        <a className="gallery-popup" href="/">
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/3774897/pexels-photo-3774897.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span className="gallery-icon">
            <i className="fa fa-plus"></i>
          </span>
        </a>
        <div className="project-item-info">
          <div className="project-item-info-content">
            <h3 className="project-item-title">
              <a href="/">Capital Teltway Building</a>
            </h3>
            <p className="project-cat">Commercial, Interiors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
