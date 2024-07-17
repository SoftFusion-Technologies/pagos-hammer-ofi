import React from 'react';
import Trimestral from '../Images/trimestral.png'; // Actualiza la ruta a la imagen que subiste
import Semestral from '../Images/semestral.png'; // Actualiza la ruta a la imagen que subiste
import Anual from '../Images/anual.png'; // Actualiza la ruta a la imagen que subiste
import Macro from '../Images/macro.png'; // Actualiza la ruta a la imagen que subiste
import { useNavigate } from 'react-router-dom';

const Promociones = () => {
  const navigate = useNavigate();

  const handleTrimestralClick = () => {
    navigate('/cuotas', { state: { cuotas1: true, cuotas3: true, cuotas6: false, cuotas12: false } }); //cantidad de cuotas habilitadas
  };

  const handleSemestralClick = () => {
    navigate('/cuotas', { state: { cuotas1: true, cuotas3: true, cuotas6: true, cuotas12: false } });
  };

  const handleAnualClick = () => {
    navigate('/cuotas', { state: { cuotas1: true, cuotas3: true, cuotas6: true, cuotas12: true } });
  };

  return (
    <div>
      <h1 className="message font-bignoodle m2">
        MIRÁ NUESTRAS PROMOCIONES -----------------------
      </h1>
      <div className="square-div" onClick={handleTrimestralClick}>
        <img src={Trimestral} alt="Promoción Trimestral" />
      </div>
      <div className="square-div" onClick={handleSemestralClick}>
        <img src={Semestral} alt="Promoción Semestral" />
      </div>
      <div className="square-div" onClick={handleAnualClick}>
        <img src={Anual} alt="Promoción Anual" />
      </div>
      <div className="square-div">
        <img src={Macro} alt="Promoción Macro" />
      </div>
    </div>
  );
};

export default Promociones;