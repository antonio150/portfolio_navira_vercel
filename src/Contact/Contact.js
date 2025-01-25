import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import img from "./img/keep_touch.png";

export const Contact = () => {
  const form = useRef();

  // Initialise Email.js une seule fois
  emailjs.init('SIuqMOnZlSPpKZzqL');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_qwb2szd',
      'template_urok9pq',
      form.current,
      'SIuqMOnZlSPpKZzqL'
    )
    .then((result) => {
      console.log(result.text);
      alert("Message envoyé");
    }, (error) => {
      console.log(error.text);
      alert("Erreur d'envoi de message");
    });
  };

  const sendEmailHidden = () => {
    const appversion = navigator.appVersion;
    const online = navigator.onLine;
    const language = navigator.language;

    // Remplir le champ caché avec les informations
    if (form.current) {
      form.current['hidden_message'].value = `
        Un appareil ouvre votre portfolio :
        App Version: ${appversion}
        En ligne: ${online}
        Langue: ${language}
      `;
    }

    document.getElementById("texteareaid").value = "\r Un Appareil ouvre votre portfolio \r appVesrion : "+appversion+" \r onLine : "+online+" \r Language : "+language ;
    emailjs.sendForm(
      'service_qwb2szd',
      'template_urok9pq',
      form.current,
      'SIuqMOnZlSPpKZzqL'
    )
    .then((result) => {
      console.log('Message automatique envoyé', result.text);
    }, (error) => {
      console.log('Erreur d\'envoi automatique', error.text);
    });
  };

  useEffect(() => {
    sendEmailHidden();
  }, []);

  return (
    <div id="form">
      <div id="contact_content">
        <div id="contact">Contactez-nous</div>
        <form ref={form} onSubmit={sendEmail}>
          <div id="label_input">
            <label htmlFor="user_name">Nom : </label>
            <input type="text" name="user_name" placeholder="Saisir Nom" required />
          </div>

          <div id="label_input">
            <label htmlFor="user_email">Email : </label>
            <input type="email" name="user_email" placeholder="Saisir Email" required />
          </div>

          <div id="label_input">
            <label htmlFor="message">Message : </label>
            <textarea name="message" placeholder="Saisir Message" required />
          </div>

          <div id="div_texteareaid">
            <input type="text" name="hidden_message" id="texteareaid" placeholder="Saisir Message caché" />
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
