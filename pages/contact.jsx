import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from '../components/Head';

export default function contact() {
  return (
    <div className="page">
      <Head pageTitle="Contact" />
      <main>
        <NavBar pageTitle="Contact" />
        <div className="pageContent">
          <h1>Contact Me</h1>
          <p>
            Let's get in touch! You can contact me for any enquiry by filling-out the contact form below
            (it will go straight to my mailbox) or through any of my social media channels.
          </p>

          <div className="spacer"></div>

          <h2>Send me a message!</h2>
          <ContactForm />

          <div className="spacer"></div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
