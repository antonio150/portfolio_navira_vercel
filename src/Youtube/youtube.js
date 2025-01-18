import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import twig_component from "./img/twig_component.PNG";
import voter_symfony from "./img/voter_symfony.PNG";
import dataprovider from "./img/provider.PNG";

const Youtube = () => {
  return (
    <div class="projet" id="tutoriel">
      <div class="title">TUTORIEL SUR YOUTUBE</div>

      <div>
        <div class="title_projet">
          {" "}
          Projet <b>Symfony</b>
        </div>
        <div class="react_content">
          <div id="react_div">
            <div class="title_projet">Création du menu en symfony utilisant twig-component</div>
            <a target="_blank" href="https://www.youtube.com/watch?v=2VChHj63OLY">
              <img id="react" src={twig_component} alt="portfolio" />
            </a>
            <ul>
              <li>
                <a target="_blank"
                  id="react_link"
                  href="https://www.youtube.com/watch?v=2VChHj63OLY"
                >
                  Voir <b>youtube</b> <AiFillYoutube />
                </a>
              </li>
              <li>
                <div id="description_bpm">Déscription du sujet</div>

                <div id="description_bpm_txt">
                Un twig-component est une approche ou une bibliothèque permettant 
                de créer et d'utiliser des composants réutilisables dans 
                des fichiers Twig, souvent dans le contexte de projets Symfony. 
                Cela facilite la gestion des interfaces utilisateur en séparant 
                clairement la logique et les éléments visuels en composants autonomes.
                </div>
              </li>
            </ul>
          </div>

          <div id="react_div">
            <div class="title_projet">Ajout du voter pour la securité de l'application</div>
            <a target="_blank" href="https://www.youtube.com/watch?v=0MNXXqjUIro">
              <img id="react" src={voter_symfony} alt="entreprise" />
            </a>
            <ul>
              <li>
                <a target="_blank" id="react_link" href="https://www.youtube.com/watch?v=0MNXXqjUIro">
                  Voir <b>youtube</b> <AiFillYoutube />
                </a>
              </li>
              <li>
                <div id="description_bpm">Déscription du sujet</div>

                <div id="description_bpm_txt">
                Un voter dans Symfony est un composant utilisé pour gérer la 
                gestion des droits d'accès. En gros, il permet de décider si 
                un utilisateur a le droit d'effectuer une action spécifique sur une ressource 
                (comme lire, modifier, ou supprimer un objet).
                </div>
              </li>
            </ul>
          </div>
        </div>



        <div class="react_content">
          <div id="react_div">
            <div class="title_projet">Utilisation de DataProvider dans API Platform</div>
            <a target="_blank" href="https://www.youtube.com/watch?v=W4CVWiNIyRI">
              <img id="react" src={dataprovider} alt="portfolio" />
            </a>
            <ul>
              <li>
                <a target="_blank"
                  id="react_link"
                  href="https://www.youtube.com/watch?v=W4CVWiNIyRI"
                >
                  Voir <b>youtube</b> <AiFillYoutube />
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          
        </div>
        
      </div>
    </div>
  );
};

export default Youtube;
