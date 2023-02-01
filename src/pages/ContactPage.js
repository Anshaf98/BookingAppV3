import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Topbar from "../components/Navbar/Topbar/Topbar";
import Title from "../components/Title/Title";
import "./Contact.css";

const ContactPage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Title
        title="SINGLE PROJECT"
        bg="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
