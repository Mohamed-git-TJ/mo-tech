import { useRef } from "react";
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
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-box">
        <label>Full Name</label>
        <input
          type="text"
          className="field"
          placeholder="Your Name"
          name="name"
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
          required
        />
      </div>
      <input type="submit" className="btn btn-primary btn-lg btn-block"></input>
    </form>
  );
}

export default Form;
