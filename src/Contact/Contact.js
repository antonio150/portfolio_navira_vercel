import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import img from "./img/keep_touch.png";

export const Contact = () => {
  const form = useRef();

  // Initialisation d'Email.js
  emailjs.init("SIuqMOnZlSPpKZzqL");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_qwb2szd",
      "template_urok9pq",
      form.current,
      "SIuqMOnZlSPpKZzqL"
    )
      .then((result) => {
        console.log(result.text);
        alert("Message envoyé avec succès !");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Erreur lors de l'envoi du message.");
      });
  };

  return (
    <div id="form">
      <div id="contact_content">
        <div id="contact">Contactez-nous</div>
        <form ref={form} onSubmit={sendEmail}>
          <div id="label_input">
            <label htmlFor="user_name">Nom :</label>
            <input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              required
            />
          </div>
          <div id="label_input">
            <label htmlFor="user_email">Email :</label>
            <input
              type="email"
              name="user_email"
              placeholder="Votre email"
              required
            />
          </div>
          <div id="label_input">
            <label htmlFor="message">Message :</label>
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              required
            />
          </div>
          <input id="submit" type="submit" value="Envoyer le message" />
        </form>
      </div>
      <div id="img_contact_div">
        <img id="img_contact" src={img} alt="Contactez-nous" />
      </div>
    </div>
  );
};
