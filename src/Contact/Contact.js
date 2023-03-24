import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import img from "./img/keep_touch.png"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_55mozcr', 'template_u7ubetq', form.current, 'bQE3BHIHaiNfHX1df')
      .then((result) => {
          console.log(result.text);
          alert("Message envoyé")
      }, (error) => {
          console.log(error.text);
          alert("Erreur d'envoi de message")
      });
  };

  return (
<div id="form">
        <div id="contact_content">
        <div id="contact"> Contactez nous</div>
        <form ref={form} onSubmit={sendEmail}>
                <div id="label_input">
                        <label for="user_name">Nom : </label>
                        <input type="text" name="user_name" placeholder='Saisir Nom' required/>
                </div>


                <div id="label_input">
                        <label for="user_email">Email : </label>
                        <input type="email" name="user_email" placeholder='Saisir Email' required/>
                </div>
                

                <div id="label_input">
                        <label for="message"> Message : </label>
                        <textarea name="message" placeholder='Saisir Message' required/>
                </div>
               
                
                <input id="submit" type="submit" value="Envoyé message" />

               
        </form>
        </div>
                <div id='img_contact_div' >
                        <img id='img_contact' src={img} />
                </div>
</div>
    
  );
};