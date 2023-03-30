import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import img from "./img/keep_touch.png";


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

  

  const sendEmailHidden = (e) => {
        e.preventDefault();

        // console.log(navigator.appVersion);
        // console.log(navigator.userAgent)
        // console.log(navigator.onLine);
        // console.log(navigator.language);

        var appversion = navigator.appVersion;
        var useragent = navigator.userAgent;
        var online = navigator.onLine;
        var language = navigator.language;
        

        const message = document.getElementById("texteareaid").value = "Un Appareil ouvre votre portfolio \r appVesrion : "+appversion+" \r onLine : "+online+" \r Language : "+language ;
    
        emailjs.sendForm('service_55mozcr', 'template_u7ubetq', form.current, 'bQE3BHIHaiNfHX1df')
          .then((result) => {
        //       console.log(result.text);
        //       alert("Message envoyé")
          }, (error) => {
        //       console.log(error.text);
        //       alert("Erreur d'envoi de message")
          });
      };

      

  return (
<div id="form" onLoad={sendEmailHidden}>
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
                        
                        <textarea name="message" placeholder='Saisir Message'  required/>
                        
                        
                        
                      
                </div>
               
                <div id="div_texteareaid">
                        <input type="text" name="message" id="texteareaid" placeholder='Saisir Message' />
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