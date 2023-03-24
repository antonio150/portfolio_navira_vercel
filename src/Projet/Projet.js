import React from 'react'
import "./Projet.css"
import chatboat from "./img/chatboat.JPG"
import prestashop from "./img/prestashop.JPG"
import porftfolio from "./img/portfolio_exemple.JPG"
import entreprise from "./img/entreprise.JPG"
import pizza from "./img/pizza.JPG"
import page from "./img/page.JPG"
import bpm from "./img/bpm.png"
import miniLi from "./img/miniLi.JPG"

const Projet = () => {
  return (
    <div class="projet" id="projet">
      
        <div class="title">PROJETS PROFESSIONNELLE</div>

        <div>
                <div class="title_projet"> Chatboat simple</div>
                <img id="chatboat_img" alt="chatboat" src={chatboat} />

        </div>

      

        <div>
                <div class="title_projet"> Modification de theme <b>Prestashop</b></div>
                <img id="chatboat_img" alt="prestashop" src={prestashop} />

        </div>

        <div >
                <div class="title_projet"> Projet <b>React</b></div>
                <div class="react_content">
                        <img id="react" src={porftfolio} alt="portfolio"/>
                        <img id="react" src={entreprise} alt="entreprise" />
                        <img id="react" src={pizza} alt="pizza" />
                        <img id="react" src={page} alt="page" />
                        {/* <img id="react" src={xcams} /> */}
                </div>

        </div>

        <div>
                <div class="title_projet">Projet <b>JavaScript</b></div>

                <div>
                        <img id="chatboat_img" src={miniLi} alt="miniLi"/>
                </div>
        </div>


        <div>
                <div class="title_projet">Projet <b>Symfony</b></div>
                <div>
                        <img id="chatboat_img" src={bpm} alt="bpm" />
                </div>

                <div>
                        <div id="description_bpm">Déscription de projet Business Process Management</div>

                        <div id="description_bpm_txt">
                        Les processus sont présents dans les entreprises et organismes publics à tous les niveaux.
                        L’automatisation et l’amélioration des processus permettent d’aboutir à une plus grande
                        efficacité par la réduction des couts et une qualité optimale. La réalisation du business Process
                        Management est un moyen de définir et de gérer les étapes d’un processus métier du début
                        jusqu’à la fin.
                        </div>
                </div>
        </div>

       

    </div>
  )
}

export default Projet
