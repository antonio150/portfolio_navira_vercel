import React from "react";
import "./Presentation.css";
import antonio from "./antonio.png";

import Typed from "typed.js";

const Presentation = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Développeur PHP expérimenté avec plus de 2 ans d'expérience dans la conception, le développement et la maintenance d'applications web. Compétent dans l'utilisation des frameworks PHP modernes tels que Symfony. Passionné par le code propre et bien documenté, avec une forte capacité à résoudre les problèmes techniques."
      ],
      typeSpeed: 100,
      backSpeed: 100,
      cursorChar: "|",
      backDelay: 13000,
      loop: true
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
        <div className="App" />
        <div class="description">
          <span ref={el} />
        </div>
      </div>

      <img id="img_antonio" src={antonio} />
    </div>
  );
};

export default Presentation;
