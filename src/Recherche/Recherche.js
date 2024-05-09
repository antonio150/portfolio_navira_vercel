import React from "react";
import "./Projet.css";
import testSymfony from "./img/testSymfony.png";
import { AiFillGithub } from "react-icons/ai";

const Recherche = ()=>{
    return (
        <div class="projet" id="projet">
             <div class="title">PROJETS DE RECHERCHE ET DE FORMATION</div>
             <div class="title_projet">
          {" "}
          Projet <b>Symfony</b>
        </div>
        
        <div>
        <div class="title_projet">
          Utilisation PHPUnit
        </div>
        <a href="https://github.com/antonio150/testSymfony">
          <img id="react" src={testSymfony} alt="portfolio" />
        </a>
        <div>
          <a
            id="site_link"
            href="https://github.com/antonio150/testSymfony"
          >
            Voir <b>Répositorie</b> <AiFillGithub />
          </a>
        </div>
        <div>
          <div id="description_bpm">
            Déscription du test
          </div>

          <div id="description_bpm_txt">
          PHPUnit est un framework de test unitaire pour PHP, et il est 
          souvent utilisé pour tester des applications Symfony. 
          Il fournit un ensemble d'outils pour écrire et exécuter des 
          tests unitaires dans un environnement PHP.
<br/>
Symfony propose un bundle intégré appelé phpunit/phpunit qui facilite 
l'intégration de PHPUnit dans un projet Symfony. Ce bundle configure 
PHPUnit pour fonctionner avec la structure de répertoires typique d'une 
application Symfony et fournit des raccourcis pour exécuter des tests.




          </div>
        </div>
      </div>
        </div>
    )
};

export default Recherche;