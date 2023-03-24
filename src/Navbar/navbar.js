import React, {useEffect,useState} from 'react'
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css"


const Navbar = () => {

        const [hide, setHide] = useState(false)
        const hideseek = {
                display: hide ? 'block' : 'none'
        }

        const [click, setClick] = useState(true);
    const [button, setButton] = useState(true);
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const handleClick = () => {setClick(!click)
                                setHide(!hide)};
   
    const handleResize = () => {
        setwindowWidth(window.innerWidth)

        if (window.innerWidth > 1100) {
                setClick(true)
                setHide(false)
        }
        // else{
        //         setHide(true)
        // }
    }



    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    

   
    
  return (
    <div class="menu">

        <div>
                Navira
        </div>


        <div class="listPage">

                <div id="listPage_div">
                        
                        <a id="link_tag" href="#home">Accueil</a>
                </div>
                <div id="listPage_div">
                        <a id="link_tag" href="#presentation">Présentation</a> 
                        
                </div>

                <div id="listPage_div">
                        
                        <a id="link_tag" href="#competences">Competences</a> 
                </div>

                <div id="listPage_div">
                <a id="link_tag" href="#projet">Projet</a> 
                        
                </div>

              

                <div id="listPage_div">
                        <a id="link_tag" href="#contact">Contact</a> 
                        
                </div>

        </div>

        <div id="icon_mobile" onClick={handleClick}>
               
               {click ? <FaBars /> : <FaTimes />}
  
        </div>

        <div id="content_icon" style={hideseek} onClick={handleClick} >
        <div>
                        
                        <a id="link_tag" href="#home">Accueil</a>
                </div>
                <div >
                        <a id="link_tag" href="#presentation">Présentation</a> 
                        
                </div>

                <div>
                        
                        <a id="link_tag" href="#competences">Competences</a> 
                </div>

                <div>
                <a id="link_tag" href="#projet">Projet</a> 
                        
                </div>

              

                <div>
                        <a id="link_tag" href="#contact">Contact</a> 
                        
                </div>
        </div>
       
    </div>
  )
}

export default Navbar
