import React from 'react'
import "./Footer.css"
import {BsFillTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <BsFillTelephoneFill/> : 033 92 333 21
      </div>

      <div>
        <GrMail/> : antoniorollande@gmail.com
      </div>
      Copyright © 2023 by Navira | Tous droit reserver

      
    </div>
  )
}

export default Footer
