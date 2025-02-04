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

  const [inputValue, setInputValueName] = useState("");
  const [inputVal, setInputValueEmail] = useState("");
  const [inputVa, setInputValueMessage] = useState("");

  const validity =
    inputValue.length == 0 || inputVal.length == 0 || inputVa.length == 0;

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-box">
        <label>Full Name</label>
        <input
          type="text"
          className="field"
          placeholder="Your Name"
          name="name"
          value={inputValue}
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
          value={inputVal}
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
          value={inputVa}
          onChange={(e) => setInputValueMessage(e.target.value)}
          required
        />
      </div>

      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-lg btn-block"
        disabled={validity}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
