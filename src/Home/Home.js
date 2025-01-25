import React from 'react';
import 'boxicons';
import './Home.css';
import antonio from './img/antonio.png';
import fond_antonio from './img/fond_antonio.png';
import cv from './cv.pdf';
import Typed from 'typed.js';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Développeur Web.', 'Développeur Front-end.', 'Développeur Back-end.'],
      typeSpeed: 100,
      backSpeed: 100,
      cursorChar: '_',
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div id="home">
      <div id="intro">
        <p>Salut, C'est Moi</p>
        <h3 id="name">Antonio Navira</h3>
        <p>Bienvenue dans mon portfolio</p>
        <p>
          Je suis un <span ref={el} />
        </p>

        <div id="social_div">
          <a
            id="social_link"
            href="https://www.facebook.com/antonio.navira.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            id="social_link"
            href="https://www.instagram.com/antonionavira15/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            id="social_link"
            href="https://twitter.com/antonio27572568"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            id="social_link"
            href="https://www.linkedin.com/in/antonio-rollande-yves-andrianavalona-4753a7264/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div id="cd_div">
          <a href={cv} id="cv" download>
            Télécharger mon CV
          </a>
        </div>
      </div>

      <div id="background-container">
        <img alt="fond_antonio" id="fond_antonio_img" src={fond_antonio} />
      </div>
    </div>
  );
};

export default Home;
