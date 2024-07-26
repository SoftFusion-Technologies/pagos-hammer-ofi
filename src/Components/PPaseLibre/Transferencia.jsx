import React from 'react';
import '../../styles/transferencia.css';
import copy from '../../Images/copy.png';
import Promociones from '../Promociones';
import BackButton from '../Arrow';

const Transferencia = () => {
  const handleCopyClick = () => {
    const cbu = "0000003100078710747645";
    navigator.clipboard.writeText(cbu).then(() => {
      alert("CBU copiado al portapapeles");
    }).catch(err => {
      console.error("Error al copiar el CBU: ", err);
    });
  };

  return (
    <>
      <div className="contenttr">
        <div className="backarrow">
          <BackButton />
        </div>
        <div className="tr">
          <div>
            <p className="fondo font-bignoodle">Transferencias</p>
            <h1 className="font-bignoodle">Transferencias</h1>
          </div>
        </div>
        <div className="cbubox font-bignoodle">
          <div className="overlay"></div>
          <h2 className="h2">Plan PASE LIBRE Monteros</h2>
          <p className="texttr">REALIZÁ TUS TRANSFERENCIAS AL SIGUIENTE CBU</p>
          <div className="cbu-container">
            <p className="cbutext">0000003100078710747645</p>
            <img
              className="copy-icon"
              src={copy}
              alt="Copy Icon"
              onClick={handleCopyClick}
            />
          </div>
          <p className="texttr">
            Para poder gestionar tu pago no te olvides de descargar tu factura y
            enviarla al siguiente número
          </p>{' '}
          <p className="textnum">
            <span className="num">3863564651</span>{' '}
            <a
              href="https://api.whatsapp.com/send?phone=543863564651"
              target="_blank"
              className="click"
            >
              o hacé click aquí
            </a>
          </p>
          <p className="abonar">Total a abonar: $20.500</p>
        </div>
        <Promociones />
      </div>
    </>
  );
}

export default Transferencia;