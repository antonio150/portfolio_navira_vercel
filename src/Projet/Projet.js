import React from "react";
import "./Projet.css";
import chatgpt from "./img/chatgpt.JPG";
import prestashop from "./img/prestashop.JPG";
import porftfolio from "./img/portfolio_exemple.JPG";
import entreprise from "./img/entreprise.JPG";
import pizza from "./img/pizza.JPG";
import page from "./img/dashboard.JPG";
import bpm from "./img/bpm.png";
import miniLi from "./img/miniLi.JPG";
import atm from "./img/atm.JPG";
import symfony_gitlab from "./img/symfony_gitlab.png";
import gestionEcole from "./img/gestionEcole.JPG";
import ingredient from "./img/ingredient.JPG";

import { AiFillGithub } from "react-icons/ai";

const Projet = () => {
  return (
    <div class="projet" id="projet">
      <div class="title">PROJETS PROFESSIONNELLE</div>

      <div>
        <div class="title_projet">
          {" "}
          WORDPRESS <b>(DIVI)</b>
        </div>
        <a href="https://antso-tontolo-miaina.org/">
          <img class="react" src={atm} alt="portfolio" />
        </a>
        <ul>
          <li>
            <a id="react_link" href="https://antso-tontolo-miaina.org/">
              Voir <b>Demo</b>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div class="title_projet">
          {" "}
           <b>React</b>
        </div>
        <div class="react_content">
          <div id="react_div">
            <a href="https://navira-website-test-2.vercel.app/">
              <img className="size_image_react" src={porftfolio} alt="portfolio" />
            </a>
            <ul>
              <li>
                <a
                  id="react_link"
                  href="https://navira-website-test-2.vercel.app/"
                >
                  Voir <b>Demo</b>
                </a>
              </li>
              <li>
                <a
                  id="react_link"
                  href="https://github.com/antonio150/navira-website-test-2"
                >
                  Voir <b>Répositorie</b> <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>

          <div id="react_div">
            <a href="https://navira-website-test-1-f2v7.vercel.app/">
              <img className="size_image_react" src={entreprise} alt="entreprise" />
            </a>
            <ul>
              <li>
                <a
                  id="react_link"
                  href="https://navira-website-test-1-f2v7.vercel.app/"
                >
                  Voir <b>Demo</b>
                </a>
              </li>
              <li>
                <a
                  id="react_link"
                  href="https://github.com/antonio150/navira-website-test-1"
                >
                  Voir <b>Répositorie</b> <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>

          <div id="react_div">
            <a id="react_link" href="https://navira-website-pizza.vercel.app/">
              <img className="size_image_react" src={pizza} alt="pizza" />
            </a>
            <ul>
              <li>
                <a
                  id="react_link"
                  href="https://navira-website-pizza.vercel.app/"
                >
                  Voir <b>Demo</b>
                </a>
              </li>
              <li>
                <a
                  id="react_link"
                  href="https://github.com/antonio150/navira-pizza"
                >
                  Voir <b>Répositorie</b> <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>

          <div id="react_div">
            <a href="https://dashboard-five-neon.vercel.app/">
              <img className="size_image_react" src={page} alt="page" />
            </a>
            <ul>
              <li>
                <a
                  id="react_link"
                  href="https://dashboard-five-neon.vercel.app/"
                >
                  Voir <b>Demo</b>
                </a>
              </li>
              <li>
                <a
                  id="react_link"
                  href="https://github.com/antonio150/dashboard"
                >
                  Voir <b>Répositorie</b> <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
          {/* <img id="react" src={xcams} /> */}
        </div>
      </div>

      

     

      <div>
        <div class="title_projet">
           <b>PHP POO</b>
        </div>
        <div>
          <a href="https://demo001.creativedev-madagascar.com/Arys_v240320/index.php?controller=login&action=index">
            <img className="react" src={gestionEcole} alt="bpm" />
          </a>
        </div>

        <div>
          <a
            id="site_link"
            href="https://demo001.creativedev-madagascar.com/Arys_v240320/index.php?controller=login&action=index"
          >
            Voir <b>démo</b>
          </a>
        </div>
      </div>

      <div>
        <div class="title_projet">
           <b>Symfony</b>
        </div>
        <div>
          <a href="https://github.com/antonio150/bpmn">
            <img className="react" src={ingredient} alt="bpm" />
          </a>
        </div>

        <div>
          <a id="site_link" href="https://github.com/antonio150/Ingredient">
            Voir <b>Répositorie</b> <AiFillGithub />
          </a>
        </div>

        <div className="center_div">
          <div id="description_bpm">Outils </div>

          <div className="react" id="description_bpm_txt">
            PHP, Symfony, Twig, SQL, PHPUnit
          </div>
        </div>

        <div className="center_div">
          <div id="description_bpm">Déscription de projet </div>

          <div className="react" id="description_bpm_txt">
            Dans ce projet, j'ai fait des CRUD du ingredient et recette. <br />
            Mais la plus important est au niveau de la securité. J'ai créer
            compte utilisateur et chaque utilisateur doit d'abord se connecter
            avant d'acceder au ingredient et recette.
          </div>
        </div>
      </div>
      <div>
        <div class="title_projet">
           <b>Symfony</b>
        </div>
        <div>
          <a href="https://github.com/antonio150/bpmn">
            <img className="react" src={bpm} alt="bpm" />
          </a>
        </div>

        <div>
          <a id="site_link" href="https://github.com/antonio150/bpmn">
            Voir <b>Répositorie</b> <AiFillGithub />
          </a>
        </div>

        <div>
          <div id="description_bpm">
            Outils
          </div>

          <div className="react" id="description_bpm_txt">
            Symfony, Jquery, SQL, PHP, JavaScript
          </div>
        </div>

        <div>
          <div id="description_bpm">
            Déscription de projet Business Process Management
          </div>

          <div className="react" id="description_bpm_txt">
            Les processus sont présents dans les entreprises et organismes
            publics à tous les niveaux. L’automatisation et l’amélioration des
            processus permettent d’aboutir à une plus grande efficacité par la
            réduction des couts et une qualité optimale. La réalisation du
            business Process Management est un moyen de définir et de gérer les
            étapes d’un processus métier du début jusqu’à la fin .
          </div>
        </div>
      </div>

      <div>
        <div class="title_projet">
           <b>Symfony</b>
        </div>
        <div>
          <a href="https://gitlab.com/projet-travaille/symfony_gitlab">
            <img className="react" src={symfony_gitlab} alt="bpm" />
          </a>
        </div>

        <div>
          <a
            id="site_link"
            href="https://gitlab.com/projet-travaille/symfony_gitlab"
          >
            Voir <b>Répositorie</b> <AiFillGithub />
          </a>
        </div>

        <div>
          <div id="description_bpm">Outils </div>

          <div className="react" id="description_bpm_txt">
            PHPUnit, Symfony, SQL, Docker, CI/CD, EasyAdmin
          </div>
        </div>

        <div>
          <div id="description_bpm">Déscription de projet </div>

          <div className="react" id="description_bpm_txt">
            Dans ce projet, j'ai fait des CRUD du Invitation, Books, Authors,
            Users et Userbook. <br />
            Mais la plus important est au niveau de la securité. J'ai créer
            compte utilisateur et chaque utilisateur doit d'abord se connecter
            avant d'acceder au page admin. J'ai utilisé easyAdmin pour generer
            automatiquement l'interface admin.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet;
