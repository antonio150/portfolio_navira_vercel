import React from 'react'
import "./Projet.css"
import chatgpt from "./img/chatgpt.JPG"
import prestashop from "./img/prestashop.JPG"
import porftfolio from "./img/portfolio_exemple.JPG"
import entreprise from "./img/entreprise.JPG"
import pizza from "./img/pizza.JPG"
import page from "./img/dashboard.JPG"
import bpm from "./img/bpm.png"
import miniLi from "./img/miniLi.JPG"
import atm from "./img/atm.JPG"
import etm from "./img/etm.JPG"
import gestionEcole from "./img/gestionEcole.JPG"
import ingredient from "./img/ingredient.JPG"


import { AiFillGithub } from 'react-icons/ai'

const Projet = () => {
        return (
                <div class="projet" id="projet">

                        <div class="title">PROJETS PROFESSIONNELLE</div>







                        <div >
                                <div class="title_projet"> WORDPRESS <b>(DIVI)</b></div>
                                <a href='https://antso-tontolo-miaina.org/'>
                                        <img id="react" src={atm} alt="portfolio" />
                                </a>
                                <ul>
                                        <li><a id='react_link' href='https://antso-tontolo-miaina.org/'>Voir <b>Demo</b></a></li>

                                </ul>





                        </div>

                        <div >
                                <div class="title_projet"> Projet <b>React</b></div>
                                <div class="react_content">
                                        <div id='react_div'>
                                                <a href='https://navira-website-test-2.vercel.app/'>
                                                        <img id="react" src={porftfolio} alt="portfolio" />
                                                </a>
                                                <ul>
                                                        <li><a id='react_link' href='https://navira-website-test-2.vercel.app/'>Voir <b>Demo</b></a></li>
                                                        <li><a id='react_link' href='https://github.com/antonio150/navira-website-test-2'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                                </ul>


                                        </div>

                                        <div id='react_div'>
                                                <a href='https://navira-website-test-1-f2v7.vercel.app/'>
                                                        <img id="react" src={entreprise} alt="entreprise" />
                                                </a>
                                                <ul>
                                                        <li><a id='react_link' href='https://navira-website-test-1-f2v7.vercel.app/'>Voir <b>Demo</b></a></li>
                                                        <li><a id='react_link' href='https://github.com/antonio150/navira-website-test-1'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                                </ul>
                                        </div>

                                        <div id='react_div'>
                                                <a id='react_link' href='https://navira-website-pizza.vercel.app/'>
                                                        <img id="react" src={pizza} alt="pizza" />
                                                </a>
                                                <ul>
                                                        <li><a id='react_link' href='https://navira-website-pizza.vercel.app/'>Voir <b>Demo</b></a></li>
                                                        <li><a id='react_link' href='https://github.com/antonio150/navira-pizza'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                                </ul>
                                        </div>

                                        <div id='react_div'>
                                                <a href='https://dashboard-five-neon.vercel.app/'>
                                                        <img id="react" src={page} alt="page" />
                                                </a>
                                                <ul>
                                                        <li><a id='react_link' href='https://dashboard-five-neon.vercel.app/'>Voir <b>Demo</b></a></li>
                                                        <li><a id='react_link' href='https://github.com/antonio150/dashboard'>Voir <b>Répositorie</b> <AiFillGithub /></a></li>
                                                </ul>
                                        </div>
                                        {/* <img id="react" src={xcams} /> */}
                                </div>

                        </div>

                        <div>
                                <div class="title_projet">Intégration <b>Chat GPT</b> dans <b>React</b></div>

                                <div><a href='https://github.com/antonio150/chat-gpt'>
                                        <img id="chatboat_img" src={chatgpt} alt="miniLi" /></a>
                                </div>

                                <div>
                                        <a id='site_link' href='https://github.com/antonio150/chat-gpt'>Voir <b>Répositorie</b> <AiFillGithub /></a>
                                </div>
                        </div>

                        <div>
                                <div class="title_projet">Projet <b>JavaScript</b></div>

                                <div><a href='https://github.com/antonio150/Minimum_ligne'>
                                        <img id="chatboat_img" src={miniLi} alt="miniLi" /></a>
                                </div>

                                <div>
                                        <a id='site_link' href='https://github.com/antonio150/Minimum_ligne'>Voir <b>Répositorie</b> <AiFillGithub /></a>
                                </div>
                        </div>

                        <div>
                                <div class="title_projet">Projet <b>PHP POO</b></div>
                                <div><a href='https://demo001.creativedev-madagascar.com/Arys_v240320/index.php?controller=login&action=index'>
                                        <img id="chatboat_img" src={gestionEcole} alt="bpm" /></a>
                                </div>

                                <div>
                                        <a id='site_link' href='https://demo001.creativedev-madagascar.com/Arys_v240320/index.php?controller=login&action=index'>Voir <b>démo</b> <AiFillGithub /></a>
                                </div>



                        </div>

                        <div>
                                <div class="title_projet">Projet <b>Symfony</b></div>
                                <div><a href='https://github.com/antonio150/bpmn'>
                                        <img id="chatboat_img" src={ingredient} alt="bpm" /></a>
                                </div>

                                <div>
                                        <a id='site_link' href='https://github.com/antonio150/Ingredient'>Voir <b>Répositorie</b> <AiFillGithub /></a>
                                </div>


                                <div>
                                        <div id="description_bpm">Déscription de projet </div>

                                        <div id="description_bpm_txt">
                                                Dans ce projet, j'ai fait des CRUD du ingredient et recette. <br />
                                                Mais la plus important est au niveau de la securité. J'ai créer compte
                                                utilisateur et chaque utilisateur doit d'abord se connecter avant d'acceder au
                                                ingredient et recette.
                                        </div>
                                </div>
                        </div>
                        <div>
                                <div class="title_projet">Projet <b>Symfony</b></div>
                                <div><a href='https://github.com/antonio150/bpmn'>
                                        <img id="chatboat_img" src={bpm} alt="bpm" /></a>
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
