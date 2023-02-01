import React from "react";
import About from "../components/About/About";
import TeamAbout from "../components/About/TeamAbout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import Title from "../components/Title/Title";

const AboutPage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Title
        title="SINGLE PROJECT"
        bg="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
      />
      <About />
      <TeamAbout />
      <Footer />
    </>
  );
};

export default AboutPage;
