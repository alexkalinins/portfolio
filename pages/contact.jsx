import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function contact() {
  return (
    <div classname="page">
      <main>
        <NavBar pageTitle="Contact" />
        <h1>Contact Me</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
