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

import { AiFillGithub } from 'react-icons/ai'

const Projet = () => {
  return (
    <div class="projet" id="projet">
      
        <div class="title">PROJETS PROFESSIONNELLE</div>

        <div>
                <div class="title_projet"> Chatboat simple</div>
                <img id="chatboat_img" alt="chatboat" src={chatboat} />

                <div id='site_link_div'>
                        <div><a id='site_link' href='http://chatboat.5.youpihost.fr/'>Voir <b>Demo</b></a></div>
                        
                </div>

        </div>

      

        <div>
                <div class="title_projet"> Modification de theme <b>Prestashop</b></div>
                <img id="chatboat_img" alt="prestashop" src={prestashop} />
                <div>
                       
                                <a id='site_link' href='https://wordpresstest.5.youpihost.fr/presta17'>Voir <b>Demo</b></a>
                                {/* <li><a id='react_link' href='https://github.com/antonio150/navira-website-test-2'>Voir <b>Répositorie</b> <AiFillGithub /></a></li> */}
                       
                </div>

        </div>

        <div >
                <div class="title_projet"> Projet <b>React</b></div>
                <div class="react_content">
                        <div id='react_div'>
                                <img id="react" src={porftfolio} alt="portfolio"/>

                                <ul>
                                        <li><a id='react_link' href='https://navira-website-test-2.vercel.app/'>Voir <b>Demo</b></a></li>
                                        <li><a id='react_link' href='https://github.com/antonio150/navira-website-test-2'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                </ul>
                                
                                
                        </div>
                        
                        <div id='react_div'>
                                <img id="react" src={entreprise} alt="entreprise" />

                                <ul>
                                        <li><a id='react_link' href='https://navira-website-test-1-f2v7.vercel.app/'>Voir <b>Demo</b></a></li>
                                        <li><a id='react_link' href='https://github.com/antonio150/navira-website-test-1'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                </ul>
                        </div>

                        <div id='react_div'>
                                <img id="react" src={pizza} alt="pizza" />

                                <ul>
                                        <li><a id='react_link' href='blob:https://vercel.com/b3b8c34c-459f-4738-8ad5-41bcd11a07ef'>Voir <b>Demo</b></a></li>
                                        <li><a id='react_link' href='https://github.com/antonio150/navira-pizza'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                </ul>
                        </div>

                        <div id='react_div'>
                                <img id="react" src={page} alt="page" />

                                <ul>
                                        <li><a id='react_link' href='blob:https://vercel.com/b74f1555-350f-4f3c-be87-3ea174ca0b02'>Voir <b>Demo</b></a></li>
                                        <li><a id='react_link' href='https://github.com/antonio150/navira-website-test-3'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                </ul>
                        </div>
                        {/* <img id="react" src={xcams} /> */}
                </div>

        </div>

        <div>
                <div class="title_projet">Projet <b>JavaScript</b></div>

                <div>
                        <img id="chatboat_img" src={miniLi} alt="miniLi"/>
                </div>

                <div>
                <a id='site_link' href='https://github.com/antonio150/Minimum_ligne'>Voir <b>Répositorie</b> <AiFillGithub /></a>
                </div>
        </div>


        <div>
                <div class="title_projet">Projet <b>Symfony</b></div>
                <div>
                        <img id="chatboat_img" src={bpm} alt="bpm" />
                </div>

                <div>
                <a id='site_link' href='https://github.com/antonio150/bpmn'>Voir <b>Répositorie</b> <AiFillGithub /></a>
                </div>
                        

                <div>
                        <div id="description_bpm">Déscription de projet Business Process Management</div>

                        <div id="description_bpm_txt">
                        Les processus sont présents dans les entreprises et organismes publics à tous les niveaux.
                        L’automatisation et l’amélioration des processus permettent d’aboutir à une plus grande
                        efficacité par la réduction des couts et une qualité optimale. La réalisation du business Process
                        Management est un moyen de définir et de gérer les étapes d’un processus métier du début
                        jusqu’à la fin .
                        </div>
                </div>
        </div>

       

    </div>
  )
}

export default Projet
