import React from "react";

const SingleContainer = () => {
  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div id="page-slider" className="page-slider small-bg">
              <div className="item">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="images/projects/project5.jpg"
                  alt=""
                />
              </div>

              <div className="item">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="images/projects/project4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <h3 className="column-title mrt-0">Capital Teltway Building</h3>
            <p>
              Morbi turpis nisl, auctor ut nisl vel, pellentesque euismod nunc
              nunc accumsan imperdiet.
            </p>

            <ul className="project-info list-unstyled">
              <li>
                <p className="project-info-label">Client</p>
                <p className="project-info-content">
                  Pransbay Powers Authority
                </p>
              </li>
              <li>
                <p className="project-info-label">Architect</p>
                <p className="project-info-content">Dlarke Pelli Incorp</p>
              </li>
              <li>
                <p className="project-info-label">Location</p>
                <p className="project-info-content">McLean, VA</p>
              </li>
              <li>
                <p className="project-info-label">Size</p>
                <p className="project-info-content">65,000 SF</p>
              </li>
              <li>
                <p className="project-info-label">Year Completed</p>
                <p className="project-info-content">2015</p>
              </li>
              <li>
                <p className="project-info-label">Categories</p>
                <p className="project-info-content">Commercial, Interiors</p>
              </li>
              <li>
                <p className="project-link">
                  <a className="btn btn-primary" target="_blank" href="#">
                    View Project
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleContainer;
