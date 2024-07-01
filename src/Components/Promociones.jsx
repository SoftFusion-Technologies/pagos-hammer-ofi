import React from 'react'
import Trimestral from '../Images/trimestral.png'; // Actualiza la ruta a la imagen que subiste
import Semestral from '../Images/semestral.png'; // Actualiza la ruta a la imagen que subiste
import Anual from '../Images/anual.png'; // Actualiza la ruta a la imagen que subiste
import Macro from '../Images/macro.png'; // Actualiza la ruta a la imagen que subiste

const Promociones = () => {
  return (
    <div>
      <h1 className="message font-bignoodle m2">
        MIRÁ NUESTRAS PROMOCIONES -----------------------
      </h1>
      <div className="square-div">
        <img src={Trimestral} alt="Promoción" />
      </div>
      <div className="square-div">
        <img src={Semestral} alt="Promoción" />
      </div>
      <div className="square-div">
        <img src={Anual} alt="Promoción" />
      </div>
      <div className="square-div">
        <img src={Macro} alt="Promoción" />
      </div>
    </div>
  );
}

export default Promociones