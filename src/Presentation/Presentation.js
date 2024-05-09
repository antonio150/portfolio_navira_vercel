import React from 'react'
import "./Presentation.css"
import antonio from "./antonio.png"

import Typed from 'typed.js'

const Presentation = () => {

const el = React.useRef(null);

React.useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Etant diplomé de Master Professionnelle en Developpement web au sein de l`\'Ecole Nationale d\'    Informatique dans l\'Université de Fianarantsoa et la réalisation des différentes stage au sein des différentes grandes entreprises qui m`\'ont permis    d\'acquerir compétences pour la réalisation des différentes projet.'],
    typeSpeed: 100,
    backSpeed: 100,
    cursorChar: '|',
    backDelay: 13000,
    loop: true,
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);


  return (
    <div class="presentation" id="presentation">
        <div class="define">
                <div class="nom">ANDRIANAVALONA Yves Antonio Rollande</div>
                <div className="App">
    </div>
                <div class="description">
                <span ref={el} />
                </div>

        </div>

        <img id="img_antonio" src={antonio} />


      
    </div>
  )
}

export default Presentation
