import React from "react";
import Banner from "../components/Banner/Banner";
import Box from "../components/Box/Box";
import Content from "../components/Content/Content";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import Product from "../components/Project/Product";
import Service from "../components/Service/Service";
import Subscribe from "../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Topbar />
      <Header />

      <Banner />
      <Box />
      <Features />
      <Service />
      <Product />
      <Subscribe />
      <Content />

      <Footer />
    </>
  );
};

export default Home;
