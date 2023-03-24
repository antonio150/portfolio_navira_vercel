import React from 'react'
import "./Competences.css"

import css from "./img/css.png"
import html from "./img/html.png"
import javascript from "./img/javascript.png"
import php from "./img/php.png"
import Prestashop from "./img/Prestashop.png"
import react from "./img/react.png"
import symfony from "./img/symfony.png"
import jquery from "./img/jquery-cours.png"



const Competences = () => {
  return (
    <div class="competences" id="competences">

        <div class="title_compete"> COMPETENCES</div>

        <div id='compete_logo'>
                <img id="img_logo" src={css} />
                <img id="img_logo" src={html} />
                <img id="img_logo" src={javascript} />
                <img id="img_logo" src={jquery} />
                <img id="img_logo" src={php} />
                <img id="img_logo" src={Prestashop} />
                <img id="img_logo" src={react} />
                <img id="img_logo" src={symfony} />
        </div>
      
    </div>
  )
}

export default Competences
