import React from "react";
import Footer from "../components/Footer/Footer";
import MainContainer from "../components/MainContainer/MainContainer";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import Title from "../components/Title/Title";

const OurTeam = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Title
        title="Our Team"
        bg="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
      />

      <MainContainer />
      <Footer />
    </>
  );
};

export default OurTeam;
