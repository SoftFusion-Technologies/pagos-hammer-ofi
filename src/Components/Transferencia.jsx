import React from 'react';
import '../styles/transferencia.css';
import copy from '../Images/copy.png';
import Promociones from './Promociones';

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
      <div className='contenttr'>
        <div className='tr'>
          <p className='fondo font-bignoodle'>Transferencias</p>
          <h1 className='font-bignoodle centered-text'>Transferencias</h1>
        </div>
        <div className='cbubox font-bignoodle'>
          <div className='overlay'></div>
          <p className='texttr'>REALIZÁ TUS TRANSFERENCIAS AL SIGUIENTE CBU</p>
          <div className='cbu-container'>
            <p className='cbutext'>0000003100078710747645</p>
            <img className='copy-icon' src={copy} alt="Copy Icon" onClick={handleCopyClick} />
          </div>
          <p className='texttr'>y enviá tu comprobante a nuestro whatsapp</p>
          <p className='textnum'><span className='num'>3863564651</span> <span className='click'>o hacé click aquí</span></p>
        </div>
        <Promociones />
      </div>
    </>
  );
}

export default Transferencia;