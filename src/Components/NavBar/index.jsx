import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import {
  DivHeader,
  LogoDivStyle,
  MenuHamburgue,
  Menu_nav_social,
  Menu_nav_social_div,
  NavListStyle,
  SociaisMidiasStyled,
} from "./style";

import { Link, Outlet } from "react-router-dom";
import logo from "../../../src/Assets/lg1.png";

// eslint-disable-next-line react/prop-types
export const NavBar = ({ isMenuActive, setIsMenuActive }) => {
  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  function openFone() {
    const url = "tel:+551238838005";
    window.open(url);
  }

  function openInsta() {
    const url = "https://www.instagram.com/atual_sindicoprofissional/";
    window.open(url);
  }

  function openWhatsApp() {
    const phoneNumber = "+551238838005";
    const message = "Olá! Gostaria de conversar!";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <DivHeader>
        <SociaisMidiasStyled>
          <div onClick={openFone} className="socialContainer">
            <BsFillTelephoneOutboundFill className="wppIcons fone" />
            <h5>(12) 3883 - 8005 </h5>
          </div>
          <div onClick={openWhatsApp} className="socialContainer">
            <IoLogoWhatsapp className="wppIcons wpp" />
            <h5>(12) 9 8300 - 3611</h5>
          </div>
          <div onClick={openInsta} className="socialContainer">
            <RiInstagramFill className="wppIcons insta" />
            <h5>@atual_sindicoprofissional</h5>
          </div>
        </SociaisMidiasStyled>

        <Menu_nav_social>
          <LogoDivStyle>
            <img src={logo} alt="Logo Atual" />
          </LogoDivStyle>
          <Menu_nav_social_div>
            <MenuHamburgue className={`mobileMenu`} onClick={handleMenuToggle}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </MenuHamburgue>
            <NavListStyle className={`${!isMenuActive ? "close" : ""}`}>
              <Link onClick={handleMenuToggle} to={"/"}>Home</Link>
              <Link onClick={handleMenuToggle} to={"/quem_somos"}>Quem Somos</Link>
              <Link onClick={handleMenuToggle} to={"/NossoTrabalho"}>Nosso Trabalho</Link>
              <Link onClick={handleMenuToggle}  to={"contato"}>Contato</Link>
            </NavListStyle>
          </Menu_nav_social_div>
        </Menu_nav_social>
      </DivHeader>
      <Outlet />
    </>
  );
};
