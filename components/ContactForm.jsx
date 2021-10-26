// a react contact form that takes name, email, and message.
import React from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submit = (event) => {
    event.preventDefault();
    //todo send email.
  };

  return (
    <div>
      <form className="contactForm">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={submit} className="primaryButton">
          Submit
        </button>
      </form>
    </div>
  );
}
