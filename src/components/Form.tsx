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
      <h5 className="mt-2 fw-bold">Name</h5>
      <div className="input-box">
        <input
          type="text"
          className="field form-control border border-dark border-2 rounded-0"
          name="name"
          value={inputValueName}
          onChange={(e) => setInputValueName(e.target.value)}
          required
        />
      </div>
      <h5 className="mt-2 fw-bold">Email</h5>
      <div className="input-box">
        
        <input
          type="email"
          className="field form-control border border-dark border-2 rounded-0"
          name="email"
          value={inputValueEmail}
          onChange={(e) => setInputValueEmail(e.target.value)}
          required
        />
      </div>
      <h5 className="mt-2 fw-bold">Message</h5> 
      <div className="input-box">
        <textarea
          className="field message form-control border border-dark border-2 rounded-0"
          name="message"
          value={inputValueMessage}
          onChange={(e) => setInputValueMessage(e.target.value)}
          required
        />
      </div>
      <div className="d-grid gap-4 col-6 mx-auto">
      <button
        onClick={handleSubmit}
        className="btn btn-primary mt-3"
        disabled={validity}
      >
        {validity ? "Fill Form" : "Send"}
      </button>
      </div>
    </form>
  );
}

export default Form;
