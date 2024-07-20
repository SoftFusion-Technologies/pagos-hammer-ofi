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
          ¡ACERCATE A LA RECEPCIÓN EN TU SEDE Y JUNTOS GESTIONAMOS TUS PAGOS!
        </h1>
        <p className="box-text">GRACIAS POR ELEGIRNOS</p>
      </div>
      <Promociones />
    </div>
  );
}

export default Efectivo
