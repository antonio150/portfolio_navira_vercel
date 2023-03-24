import { Helmet } from "react-helmet";
import Competences from "./Competences/Competences";
import { Contact } from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/navbar";
import Presentation from "./Presentation/Presentation";
import Projet from "./Projet/Projet";

function App() {
  return (
    <div>

      <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio Navira</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <Navbar/>
      <Home />
      <Presentation />
      <Competences />
      <Projet />
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;
