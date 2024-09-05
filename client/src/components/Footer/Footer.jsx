import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <h2>Daily Quotes</h2>
            <div className="icons">
            <a href="https://www.github.com/NadijaJukovic" target="_blank"><div className="circle"><FaGithub /></div></a>
            <a href="https://www.facebook.com" target="_blank"><div className="circle"><FaFacebook /></div></a>
            <a href="https://www.instagram.com" target="_blank"><div className="circle"><FaInstagram /></div></a>
            <a href="https://www.linkedin.com/" target="_blank"> <div className="circle"><FaLinkedinIn /></div></a>
            </div>
            <p>© Copyright 2024</p>
        </div>
    )
}
export default Footer;