import React from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4ec5741d-14c9-4f1f-961c-880ae4b474e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h3 className="contact-heading">Contact Me</h3>
      <form onSubmit={onSubmit} className="contact-form">
        <h4>Your Name</h4>
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Your Name"
          required
        />
        <h4>Your Email </h4>
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Your Email"
          required
        />
        <h4>Write your message here</h4>
        <textarea
          name="message"
          className="form-textarea"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="form-button">
          Submit Now
        </button>
      </form>
      <span className="form-result">{result}</span>
    </div>
  );
}

export default Contact;
