import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/sandu.jpeg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
           
          </div>
          <h2>Всем привет! Меня зовут Сандуғаш и мне 20 лет. Студентка третьего курса в университете Нархоз. UI/UX dessiner. 
            Все мои работы находятся снизу!
          </h2>
          
        </div>
      </div>
    </section>
  );
};

export default Intro;
