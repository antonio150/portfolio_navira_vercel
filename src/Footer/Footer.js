import React from "react";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <BsFillTelephoneFill />
        <span> : +261 33 92 333 21</span>
      </div>
      <div>
        <GrMail />
        <span> : antoniorollande@gmail.com</span>
      </div>
      <p>
        Copyright © 2025 by <b>Navira</b> | Tous droits réservés
      </p>
    </div>
  );
};

export default Footer;
