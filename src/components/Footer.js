import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import "../styles/Footer.css"

 function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <CiInstagram/><CiTwitter /><CiFacebook /><CiLinkedin />
        </div>
        <p>&copy: 2024 prdrotechpizza.com</p>
    </div>
  )
}

export default Footer;
