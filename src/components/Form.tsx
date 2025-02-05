import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_malp0ua", "template_79rdqmr", form.current, {
        publicKey: "C5eFLZIMllfTypX4d",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  function handleSubmit() {
    alert("Message Sent");
    location.reload();
  }

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueMessage, setInputValueMessage] = useState("");

  const validity =
    inputValueName.length == 0 ||
    inputValueEmail.length == 0 ||
    inputValueMessage.length == 0;

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-box">
        <label>Full Name</label>
        <input
          type="text"
          className="field"
          placeholder="Your Name"
          name="name"
          value={inputValueName}
          onChange={(e) => setInputValueName(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label>Email</label>
        <input
          type="email"
          className="field"
          placeholder="Your Email"
          name="email"
          value={inputValueEmail}
          onChange={(e) => setInputValueEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label>Message</label>
        <input
          type="text"
          className="field message"
          placeholder="Your Message"
          name="message"
          value={inputValueMessage}
          onChange={(e) => setInputValueMessage(e.target.value)}
          required
        />
      </div>

      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-lg btn-block"
        disabled={validity}
      >
        {validity ? "Please fill form" : "Send"}
      </button>
    </form>
  );
}

export default Form;
