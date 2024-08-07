import React from 'react';
import '../../../styles/transferencia.css';
import Promociones from '../../Promociones';
import BackButton from '../../Arrow';

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
          <h2 className="h2">Plan pase libre Concepción</h2>
          <p className="texttr">
            Ingresa al siguiente link e ingresa los datos de tu tarjeta:
          </p>
          <a
            href="https://mobbex.com/p/commerce/item/zqktzWlc9/"
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
            <span className="num">3865855100</span>{' '}
            <a
              href="https://api.whatsapp.com/send?phone=543865855100"
              className="click"
              target="_blank"
            >
              o hacé click aquí
            </a>
          </p>
          <p className="abonar">Total a abonar: $24.500</p>
        </div>
        <Promociones />
      </div>
    </>
  );
};

export default TarjetaDebito;
