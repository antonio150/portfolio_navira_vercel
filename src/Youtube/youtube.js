import { AiFillYoutube } from "react-icons/ai";
import twig_component from "./img/twig_component.PNG";
import voter_symfony from "./img/voter_symfony.PNG";
import dataprovider from "./img/provider.PNG";
import "./Youtube.css"; // Import du fichier CSS

const Youtube = () => {
  const tutorials = [
    {
      title: "Création du menu en Symfony utilisant twig-component",
      img: twig_component,
      link: "https://www.youtube.com/watch?v=2VChHj63OLY",
      description:
        "Un twig-component est une approche permettant de créer des composants réutilisables dans des fichiers Twig, facilitant la gestion des interfaces utilisateur dans des projets Symfony.",
    },
    {
      title: "Ajout du voter pour la sécurité de l'application",
      img: voter_symfony,
      link: "https://www.youtube.com/watch?v=0MNXXqjUIro",
      description:
        "Un voter dans Symfony permet de gérer les droits d'accès en décidant si un utilisateur peut effectuer une action spécifique sur une ressource.",
    },
    {
      title: "Utilisation de DataProvider dans API Platform",
      img: dataprovider,
      link: "https://www.youtube.com/watch?v=W4CVWiNIyRI",
      description:
        "Un DataProvider dans API Platform permet de personnaliser la manière dont les données sont récupérées pour les ressources exposées dans l'API.",
    },
  ];

  return (
    <div className="projet" id="tutoriel">
      <div className="title">TUTORIEL SUR YOUTUBE</div>
      <div className="react_content">
        {tutorials.map((tutorial, index) => (
          <div id="react_div" key={index}>
            <div className="title_projet">{tutorial.title}</div>
            <a target="_blank" rel="noopener noreferrer" href={tutorial.link}>
              <img id="react" src={tutorial.img} alt="Projet YouTube" />
            </a>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="react_link"
                  href={tutorial.link}
                >
                  Voir <b>youtube</b> <AiFillYoutube />
                </a>
              </li>
              <li>
                <div id="description_bpm">Description du sujet</div>
                <div id="description_bpm_txt">{tutorial.description}</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
