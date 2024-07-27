// src/PrincipalPaseLibre.js
import React from 'react';
import '../../index.css';
import Logo1 from '../../Images/logo1.png';
import Tarjeta from '../../Images/tarjetacredito.png';
import Transferencia from '../../Images/transferencia.png';
import Efectivo from '../../Images/efectivo.png';
import Promociones from '../../Components/Promociones';
import { useNavigate } from 'react-router-dom';

const PrincipalPaseLibre = () => {
  const navigate = useNavigate();

  const handleTransferenciaClick = () => {
    navigate('/monteros/paselibre/transferencia', { replace: false });
  };

  const handleEfectivoClick = () => {
    navigate('/monteros/paselibre/efectivo', { replace: false });
  };

  const handleDebitoClick = () => {
    navigate('/monteros/paselibre/tarjeta-debito', { replace: false });
  };

  return (
    <div className="content">
      <img src={Logo1} alt="Logo1" className="logo" />
      <h1 className="message font-bignoodle">
        ¡Gracias por confiar en nosotros!
      </h1>
      <div className="plan-info">
        <p className="plan-text">
          Estás por abonar tu plan: Pase Libre monteros
        </p>
      </div>
      <div className="plan-info">
        <p className="plan-text">Monto a abonar: $20.500</p>
      </div>

      <div className="payment-info" style={{ cursor: 'not-allowed' }}>
        <img
          src={Tarjeta}
          alt="Tarjeta de crédito"
          className="card-icon"
          style={{ backgroundColor: '#C3C3C3' }}
        />
        <p className="payment-text" style={{ backgroundColor: '#C3C3C3' }}>
          Tarjeta de crédito
        </p>
      </div>

      <div className="payment-info" onClick={handleDebitoClick}>
        <img src={Tarjeta} alt="Tarjeta de débito" className="card-icon" />
        <p className="payment-text">Tarjeta de débito</p>
      </div>

      <div className="payment-info" onClick={handleTransferenciaClick}>
        <img src={Transferencia} alt="Transferencia" className="card-icon" />
        <p className="payment-text">Transferencia</p>
      </div>

      <div className="payment-info" onClick={handleEfectivoClick}>
        <img src={Efectivo} alt="Efectivo" className="card-icon" />
        <p className="payment-text" title="¡5% off! 🤩">
          Efectivo
        </p>
      </div>
      <Promociones></Promociones>
    </div>
  );
};

export default PrincipalPaseLibre;
