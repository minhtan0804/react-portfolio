import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

import {
  CopyRight,
  FooterWrapper,
  Logo,
  PermaLinks,
  Socials,
} from "./footerStyle";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <Logo href="#">MINH TAN</Logo>

      <PermaLinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </PermaLinks>

      <Socials>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </Socials>

      <CopyRight>
        <small>&copy; Minh Tan. All rights reserved</small>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
