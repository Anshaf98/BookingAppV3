import React from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem";

const Product = () => {
  return (
    <section id="project-area" className="project-area solid-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="section-title">Work of Excellence</h2>
            <h3 className="section-sub-title">Recent Projects</h3>
          </div>
        </div>

        {/* Other */}
        <div className="row">
          <div className="col-12">
            <div className="row shuffle-wrapper">
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
            </div>
          </div>

          <div className="col-12">
            <div className="general-btn text-center">
              <a className="btn btn-primary" href="projects.html">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
