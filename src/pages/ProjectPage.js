import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import Product from "../components/Project/Product";
import Title from "../components/Title/Title";

const ProjectPage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Title
        title="SINGLE PROJECT"
        bg="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
      />
      <Product />
      <Footer />
    </>
  );
};

export default ProjectPage;
