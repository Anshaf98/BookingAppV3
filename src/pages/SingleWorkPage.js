import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import SingleContainer from "../components/Single/SingleContainer";
import Title from "../components/Title/Title";

const SingleWorkPage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Title
        title="SINGLE WORK"
        bg="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
      />
      <SingleContainer />
      <Footer />
    </>
  );
};

export default SingleWorkPage;
