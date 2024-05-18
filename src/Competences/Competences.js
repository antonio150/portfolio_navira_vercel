import React from "react";
import "./Competences.css";

import css from "./img/css.png";
import html from "./img/html.png";
import javascript from "./img/javascript.png";
import php from "./img/php.png";
import Prestashop from "./img/Prestashop.png";
import react from "./img/react.png";
import symfony from "./img/symfony.png";
import jquery from "./img/jquery-cours.png";
import WordPressLogo from "./img/WordPress-Logo.jpg";

const Competences = () => {
  return (
    <div class="competences" id="competences">
      <div class="title_compete"> COMPETENCES</div>

      <div id="compete_logo">
        <div className="section_img">

        
        <div className="align_img">
          <img id="img_logo" src={css} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="40"
            min="0"
            max="50"
          ></input>
        </div>
        <div className="align_img">
          <img id="img_logo" src={html} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="45"
            min="0"
            max="50"
          ></input>
        </div>

        <div className="align_img">
          <img id="img_logo" src={javascript} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="39"
            min="0"
            max="50"
          ></input>
        </div>
        <div className="align_img">
          <img id="img_logo" src={jquery} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="40"
            min="0"
            max="50"
          ></input>
        </div>
        <div className="align_img">
          <img id="img_logo" src={php} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="43"
            min="0"
            max="50"
          ></input>
        </div>
        </div>
        <div className="section_img">
        <div className="align_img">
          <img id="img_logo" src={Prestashop} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="25"
            min="0"
            max="50"
          ></input>
        </div>

        <div className="align_img">
          <img id="img_logo" src={react} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="30"
            min="0"
            max="50"
          ></input>
        </div>
        <div className="align_img">
          <img id="img_logo" src={symfony} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="37"
            min="0"
            max="50"
          ></input>
        </div>
        <div className="align_img">
          <img id="img_logo" src={WordPressLogo} />
          <input
            type="range"
            id="vol"
            name="vol"
            value="24"
            min="0"
            max="50"
          ></input>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Competences;
