import React from "react";
import Footer from "../components/Footer/Footer";
import Four0Four from "../components/Four0Four";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import Title from "../components/Title/Title";

const Four0FourPage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Title
        title="Our Team"
        bg="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
      />

      <Four0Four />
      <Footer />
    </>
  );
};

export default Four0FourPage;
