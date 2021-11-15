// a react contact form that takes name, email, and message.
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import LoaderOverlay from "./LoaderOverlay";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const [sendLock, setSendLock] = useState(false);
  const [sending, setSending] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();

    if (sendLock) { return; }

    setSendLock(true);
    setSending(true);

    if (!(email && name && messageContent && email.includes("@"))) {
      setOverlayMessage("Please fill out all fields");
      setTimeout(() => {
        setSending(false);
        setOverlayMessage("");
        setSendLock(false);
      }, 5000);
      return;
    }


    let message = {};
    message['from_email'] = email;
    message['from_name'] = name;
    message['message'] = messageContent;
    message['reply_to'] = email;


    console.log(process.env)

    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, message, process.env.EMAILJS_USER_ID).then(result => {
      console.log(result?.text);
      setOverlayMessage("Message sent!");
    }).catch(err => {
      console.log(err?.text)
      setOverlayMessage("Technical Error Sending Message :(");
    })

  };

  return (
    <div className="contact">
      {sending && <LoaderOverlay message={overlayMessage} />}
      <form className="contactGrid">
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
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <button onClick={submit} className="primaryButton">
          Submit
        </button>
      </form>
    </div>
  );
}
