// src/PrincipalTrimestrales.js
import React from 'react';
import '../../index.css';
import Logo1 from '../../Images/logo1.png';
import Tarjeta from '../../Images/tarjetacredito.png';
import Transferencia from '../../Images/transferencia.png';
import Efectivo from '../../Images/efectivo.png';
import Promociones from '../../Components/Promociones';
import { useNavigate } from 'react-router-dom';
const PrincipalTrimestrales = () => {
  const navigate = useNavigate();

  const handleTransferenciaClick = () => {
    navigate('/concepcion/semestrales/transferencia', { replace: false });
  };

  const handleEfectivoClick = () => {
    navigate('/concepcion/semestrales/efectivo', { replace: false });
  };

  const handleDebitoClick = () => {
    navigate('/concepcion/semestrales/tarjeta-debito', { replace: false });
  };

  const handleSemestralClick = () => {
    navigate('/concepcion/semestrales/cuotas', { state: { cuotas1: true, cuotas3: true, cuotas6: true, cuotas12: false } }); //cantidad de cuotas habilitadas
  };
  const numConcepcion = '3865855100';

  return (
    <div className="content">
      <img src={Logo1} alt="Logo1" className="logo" />
      <h1 className="message font-bignoodle">
        ¡Gracias por confiar en nosotros!
      </h1>
      <div className="plan-info">
        <p className="plan-text">
          Estás por abonar tu plan: semestral (sede Concepción)
        </p>
      </div>
      {/* <div className="plan-info">
        <p className="plan-text">Monto a abonar: $138.000</p>
      </div> */}

      <div
        className="payment-info"
        // se elimina el bloqueo de la tarjeta   style={{ cursor: 'not-allowed' }}
      >
        <img
          src={Tarjeta}
          alt="Tarjeta de crédito"
          className="card-icon"
          //  se elimina el bloqueo de la tarjeta   style={{ backgroundColor: '#C3C3C3' }}
        />
        <p className="payment-text" onClick={handleSemestralClick}>Tarjeta de crédito</p>
      </div>

      {/* <div className="payment-info" onClick={handleDebitoClick}>
        <img src={Tarjeta} alt="Tarjeta de débito" className="card-icon" />
        <p className="payment-text">Tarjeta de débito</p>
      </div> */}

      <div className="payment-info" onClick={handleTransferenciaClick}>
        <img src={Transferencia} alt="Transferencia" className="card-icon" />
        <p className="payment-text">Transferencia</p>
      </div>

      <div className="payment-info" onClick={handleEfectivoClick}>
        <img src={Efectivo} alt="Efectivo" className="card-icon" />
        <p className="payment-text">
          Efectivo
        </p>
      </div>
      <Promociones num={numConcepcion}></Promociones>
    </div>
  );
};

export default PrincipalTrimestrales;
