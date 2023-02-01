import React from "react";
import "./MainContainer.css";
import TeamItem from "./TeamItem";

const MainContainer = () => {
  return (
    <section id="main-container" className="main-container pb-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h3 className="section-sub-title">Our Leaderships</h3>
          </div>
        </div>

        <div className="row">
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
