import React from "react";
import "../styles/contact.scss"


const ContactForm = () => {
  return (
    <div className="contact">
      <form className="contact__form">
        <div className="contact__field">
          <label htmlFor="email" className="contact__label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="contact__input"
            placeholder="Your Email"
          />
        </div>
        <div className="contact__field">
          <label htmlFor="phone" className="contact__label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="contact__input"
            placeholder="Phone Number"
          />
        </div>
        <div className="contact__field">
          <label htmlFor="message" className="contact__label">
            Your Message Here
          </label>
          <textarea
            id="message"
            className="contact__input contact__textarea"
            placeholder="Your Message Here"
          ></textarea>
        </div>
        <button type="submit" className="contact__submit">
          Submit
        </button>
      </form>
      <div className="contact__map">
        {/* Google map iFrame yoki rasm qo'yilishi mumkin */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?..."
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="contact__map-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
