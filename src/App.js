import { Helmet } from "react-helmet";
import Competences from "./Competences/Competences";
import { Contact } from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/navbar";
import Presentation from "./Presentation/Presentation";
import Projet from "./Projet/Projet";
import Recherche from "./Recherche/Recherche";
import Youtube from "./Youtube/youtube";
import antonio from "../Home/img/antonio.png"

function App() {
  return (
    <div>

      <Helmet>
      <title>Antonio Navira</title>
        <meta property="og:title" content="Antonio Navira" />
        <meta property="og:description" content="Bienvenue sur mon portfolio. Découvrez mes projets et mes compétences en développement web." />
        <meta property="og:image" content={antonio} />
        <meta property="og:url" content="https://portfolio-navira.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar/>
      <Home />
      <Presentation />
      <Competences />
      <Projet />
      <Recherche />
      <Youtube />
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;
