import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../styles/cuotas.css';
import BackButton from '../../Arrow';

const CuotasTrimestral = () => {
  const [cuotas, setCuotas] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener las opciones de cuotas desde el estado de navegación
  const { cuotas1 = false, cuotas3 = false, cuotas6 = false, cuotas12 = false } = location.state || {};

  const cuotasOptions = [
    { value: 1, enabled: cuotas1 },
    { value: 3, enabled: cuotas3 },
    { value: 6, enabled: cuotas6 },
    { value: 12, enabled: cuotas12 }
  ];

  const handleSelection = (cuotas) => {
    setCuotas(cuotas);
    navigate('/concepcion/trimestrales/cuotas/tarjeta-credito', { state: { cuotas: cuotas } });
  };

  return (
    <div className="cuotas-container">
      <div className="backarrow">
        <BackButton />
      </div>
      <h2 className="cuotas-title font-bignoodle">Selecciona la cantidad de cuotas</h2>
      <div className="cuotas-grid">
        {cuotasOptions.map(({ value, enabled }) => (
          enabled && (
            <div
              key={value}
              className={`cuotas-card ${cuotas === value ? 'selected' : ''}`}
              onClick={() => handleSelection(value)}
            >
              <p className="cuotas-option">{value} cuota{value > 1 ? 's' : ''}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CuotasTrimestral;