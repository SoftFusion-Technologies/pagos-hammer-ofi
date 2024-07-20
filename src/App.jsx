import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';
import './index.css';

// PRIMER APP / MUSCULACION - INICIO - MONTEROS  
import PrincipalMusculacion from './Pages/PrincipalMusculacion.jsx';
import Transferencia from './Components/PMusculacion/Transferencia';
import Efectivo from './Components/PMusculacion/Efectivo.jsx';
import TarjetaDebito from './Components/PMusculacion/TarjetaDebito.jsx';
// PRIMER APP / MUSCULACION - FINAL - MONTEROS 

// SEGUNDA APP / GRUPALES - INICIO - MONTEROS  

import PrincipalGrupales from './Pages/PrincipalGrupales.jsx';
import TransferenciaG from './Components/PGrupales/Transferencia';
import EfectivoG from './Components/PGrupales/Efectivo.jsx';
import TarjetaDebitoG from './Components/PGrupales/TarjetaDebito.jsx';
// SEGUNDA APP / GRUPALES - FINAL - MONTEROS 

// TERCER APP / PASE LIBRE - INICIO - MONTEROS  

import PrincipalPaseLibre from './Pages/PrincipalPaseLibre.jsx';
import TransferenciaPL from './Components/PPaseLibre/Transferencia';
import EfectivoPL from './Components/PPaseLibre/Efectivo.jsx';
import TarjetaDebitoPL from './Components/PPaseLibre/TarjetaDebito.jsx';
// TERCER APP / PASE LIBRE - FINAL - MONTEROS 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="back">
        <Routes>
          {/* PRIMER APP / MUSCULACION - INICIO - MONTEROS */}
          <Route path="/" element={<PrincipalMusculacion />} />
          <Route path="/musculacion/tarjeta-debito" element={<TarjetaDebito />}          />
          <Route path="/musculacion/transferencia"  element={<Transferencia />}          />
          <Route path="/musculacion/efectivo" element={<Efectivo />} />
          {/* PRIMER APP / MUSCULACION  - FINAL - MONTEROS  */}

          {/* SEGUNDA APP / GRUPALES - INICIO - MONTEROS  */}
          <Route path="/grupales" element={<PrincipalGrupales />} />
          <Route path="/grupales/tarjeta-debito" element={<TarjetaDebitoG />} />
          <Route path="/grupales/transferencia" element={<TransferenciaG />} />
          <Route path="/grupales/efectivo" element={<EfectivoG />} />
          {/* SEGUNDA APP / GRUPALES - FINAL - MONTEROS  */}

          {/* TERCER APP / PASE LIBRE - INICIO - MONTEROS  */}
          <Route path="/paselibre" element={<PrincipalPaseLibre />} />
          <Route path="/paselibre/tarjeta-debito" element={<TarjetaDebitoPL />} />
          <Route path="/paselibre/transferencia" element={<TransferenciaPL />} />
          <Route path="/paselibre/efectivo" element={<EfectivoPL />} />
          {/* TERCER APP / PASE LIBRE - FINAL - MONTEROS  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
