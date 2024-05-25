import React from "react";
import CV from "../../assets/Serik Sandugash.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
       Мое резюме
      </a>
      <a href="#footer" className="btn btn-primary">
        Контакты
      </a>
    </div>
  );
};

export default CTA;
