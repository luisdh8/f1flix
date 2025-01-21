import React from "react";
import logo from "../../assets/logo.png";
import { FooterContainer, Logo } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="F1flixlogo" />
      <p>Developer by Luis Diaz &copy; 2025</p>
    </FooterContainer>
  );
};

export default Footer;
