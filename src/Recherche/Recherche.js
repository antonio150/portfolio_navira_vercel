import React from "react";
import "./Projet.css";
import testSymfony from "./img/testSymfony.png";
import docker from "./img/docker.png";
import { AiFillGithub } from "react-icons/ai";

const Recherche = () => {
  return (
    <div class="projet" id="projet">
      <div class="title">PROJETS DE RECHERCHE ET DE FORMATION</div>

      <div>
        <div class="title_projet">
          {" "}
          Projet <b>Symfony</b>
        </div>
        <div class="react_content">
          <div id="react_div">
            <div class="title_projet">Utilisation PHPUnit</div>
            <a href="https://github.com/antonio150/testSymfony">
              <img id="react" src={testSymfony} alt="portfolio" />
            </a>
            <ul>
              <li>
                <a
                  id="react_link"
                  href="https://github.com/antonio150/testSymfony"
                >
                  Voir <b>Répositorie</b> <AiFillGithub />
                </a>
              </li>
              <li>
                <div id="description_bpm">Déscription du test</div>

                <div id="description_bpm_txt">
                  PHPUnit est un framework de test unitaire pour PHP, et il est
                  souvent utilisé pour tester des applications Symfony. Il
                  fournit un ensemble d'outils pour écrire et exécuter des tests
                  unitaires dans un environnement PHP.
                  <br />
                  Symfony propose un bundle intégré appelé phpunit/phpunit qui
                  facilite l'intégration de PHPUnit dans un projet Symfony. Ce
                  bundle configure PHPUnit pour fonctionner avec la structure de
                  répertoires typique d'une application Symfony et fournit des
                  raccourcis pour exécuter des tests.
                </div>
              </li>
            </ul>
          </div>

          <div id="react_div">
            <div class="title_projet">Utilisation Docker</div>
            <a href="https://github.com/antonio150/docker">
              <img id="react" src={docker} alt="entreprise" />
            </a>
            <ul>
              <li>
                <a id="react_link" href="https://github.com/antonio150/docker">
                  Voir <b>Répositorie</b> <AiFillGithub />
                </a>
              </li>
              <li>
                <div id="description_bpm">Déscription du projet</div>

                <div id="description_bpm_txt">
                  Pour configurer Docker avec Symfony, suivez ces étapes :{" "}
                  <br />
                  1- Créez votre application Symfony : Si vous n'avez pas encore
                  une application Symfony, vous pouvez en créer une en utilisant
                  l'outil en ligne de commande Symfony. <br />
                  2- Créez un fichier Dockerfile : À la racine de votre projet
                  Symfony, créez un fichier Dockerfile. Ce fichier définit
                  l'environnement pour votre application. <br />
                  3- Créez un fichier docker-compose.yml : Ce fichier définit
                  les services, les réseaux et les volumes. Cela facilite la
                  gestion des conteneurs Docker.
                  <br />
                  4- Configuration de Symfony : Ajustez la configuration de la base
                  de données de Symfony (généralement dans
                  config/packages/doctrine.yaml ou similaire) pour se connecter
                  au conteneur de base de données. 
                  <br/>
                  5- Build et exécution : Exécutez
                  docker-compose up --build pour construire l'image Docker et
                  démarrer les conteneurs. 
                  <br/>
                  6- Accédez à l'application : Visitez
                  http://localhost:8080 dans votre navigateur pour accéder à
                  votre application Symfony.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recherche;
