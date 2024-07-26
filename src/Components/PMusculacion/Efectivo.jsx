import React from 'react'
import '../../styles/efectivo.css'
import Promociones from '../Promociones';
import BackButton from '../Arrow';

const Efectivo = () => {
  return (
    <div className="content-efectivo font-bignoodle">
      <div className="backarrow">
        <BackButton />
      </div>
      <div className="title">
        <p className="fondo-efectivo">EFECTIVO</p>
        <h1 className="title-text">EFECTIVO</h1>
      </div>
      <div className="box-efectivo">
        <h1 className="box-title">
        ¡Tu plan ya se encuentra renovado! Acercate a la recepción de tu Sede para que juntos gestionemos tu pago en efectivo.
        </h1>
        <p style={{color: "black", zIndex: "10", fontSize: "23px"}}>TOTAL A ABONAR $19.000</p>
        <p className="box-text">GRACIAS POR ELEGIRNOS</p>
      </div>
      <Promociones />
    </div>
  );
}

export default Efectivo
