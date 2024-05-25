import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import r from "../../assets/oboi.jpeg";
const Header = () => {
  return (
    
    <header id="home">
      <div className="container header__container">
        <h5>Привет </h5>
        <h1>Я Сандуғаш</h1>
        <h5 className="text-light">Студентка третьего курса и Front-end разработчик</h5>
        <CTA />
      
      </div>
    </header>
  );
};

export default Header;