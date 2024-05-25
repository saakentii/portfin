import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer>

    
      <div className="footer__socials">
      <a
          href="mailto:samdugash.serik@narxoz.kz"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/sandu-serik-669aa8306"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/saakentii"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
     
    </footer>
  );
};

export default Footer;
