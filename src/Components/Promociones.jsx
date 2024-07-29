import React from 'react';
import Trimestral from '../Images/trimestral.png';
import Semestral from '../Images/semestral.png';
import Anual from '../Images/anual.png';
import Macro from '../Images/macro.png';

const Plan = ({ imageSrc, altText, message, num }) => {
  const encodedMessage = encodeURIComponent(
    `Hola! Vengo desde la pagina web, quiero mas info sobre "${message}" :)`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=54${num}&text=${encodedMessage}`;

  return (
    <div className="square-div">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={altText} />
      </a>
    </div>
  );
};

const Promociones = ({ num }) => {
  return (
    <div>
      <h1 className="message font-bignoodle m2">
        MIRÁ NUESTRAS PROMOCIONES -----------------------
      </h1>
      <Plan
        imageSrc={Trimestral}
        altText="Promoción Trimestral"
        message="PLAN TRIMESTRAL MONTEROS"
        num={num}
      />
      <Plan
        imageSrc={Semestral}
        altText="Promoción Semestral"
        message="PLAN SEMESTRAL MONTEROS"
        num={num}
      />
      <Plan
        imageSrc={Anual}
        altText="Promoción Anual"
        message="PLAN ANUAL MONTEROS"
        num={num}
      />
      <Plan
        imageSrc={Macro}
        altText="Promoción Macro"
        message="PLAN MACRO MONTEROS"
        num={num}
      />
    </div>
  );
};

export default Promociones;
