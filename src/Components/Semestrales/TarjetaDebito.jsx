import React from 'react';
import '../../styles/transferencia.css';
import Promociones from '../Promociones';
import BackButton from '../Arrow';

const TarjetaDebito = () => {
  return (
    <>
      <div className="contenttr">
        <div className="backarrow">
          <BackButton />
        </div>
        <div className="tr">
          <div>
            <p className="fondo font-bignoodle">Tarjeta de Débito</p>
            <h1 className="font-bignoodle">Tarjeta de Débito</h1>
          </div>
        </div>
        <div className="cbubox font-bignoodle">
          <div className="overlay"></div>
          <h2 className="h2">Plan Semestral Monteros</h2>
          <p className="texttr">
            Ingresa al siguiente link e ingresa los datos de tu tarjeta:
          </p>
          <a
            href="https://mobbex.com/p/commerce/item/u1mZZ8fZF/"
            target="_blank"
            style={{ position: 'relative', fontSize: '25px' }}
          >
            Realizar pago
          </a>
          <p className="texttr">
            Para poder gestionar tu pago no te olvides de descargar tu factura y
            enviarla al siguiente número
          </p>{' '}
          <p className="textnum">
            <span className="num">3863564651</span>{' '}
            <a
              href="https://api.whatsapp.com/send?phone=543863564651"
              className="click"
              target="_blank"
            >
              o hacé click aquí
            </a>
          </p>
          <p className="abonar">Total a abonar: $114.000</p>
        </div>
        <Promociones />
      </div>
    </>
  );
}

export default TarjetaDebito;