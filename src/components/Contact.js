import React from "react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <IconContext.Provider value={{ className: "contact-icon" }}>
      <section className="contact-page">
        <h1>Contact Us</h1>
        <div className="info-box">
          <div className="address">
            <h3>
              <FaLocationArrow />
              Address
            </h3>
            <p>
              IIIT Bhubaneswar, <br />
              Gothapatna, <br />
              PO - Malipada, <br />
              Bhubaneswar - 751003, <br />
              Odisha, <br />
              India. <br />
            </p>
            <h3>
              <FaPhone />
              Phone
            </h3>
            <p>
              <a href="tel:7978756707">+91 7978756707</a>
              <br />
              <a href="tel:6371096213">+91 6371096213</a>
            </p>
            <h3>
              <FaEnvelope />
              Email
            </h3>
            <p>
              <a href="mailto:contact@advaita.io">contact@advaita.io</a>
            </p>
            <h3>Follow Us On</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/advaita.iiit/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://instagram.com/advaita_iiitbh"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1337466661125!2d85.74122071475028!3d20.294730386400488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sIIIT%2CBBSR!5e0!3m2!1sen!2sin!4v1575818027630!5m2!1sen!2sin"
              title="Venue"
              frameBorder="0"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Contact;
