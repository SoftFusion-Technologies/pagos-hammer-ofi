import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';
import './index.css';

// PRIMER APP / MUSCULACION - INICIO - MONTEROS  
import PrincipalMusculacion from './Pages/Monteros/PrincipalMusculacion.jsx';
import Transferencia from './Components/PMusculacion/Transferencia';
import Efectivo from './Components/PMusculacion/Efectivo.jsx';
import TarjetaDebito from './Components/PMusculacion/TarjetaDebito.jsx';
// PRIMER APP / MUSCULACION - FINAL - MONTEROS 

// SEGUNDA APP / GRUPALES - INICIO - MONTEROS  

import PrincipalGrupales from './Pages/Monteros/PrincipalGrupales.jsx';
import TransferenciaG from './Components/PGrupales/Transferencia';
import EfectivoG from './Components/PGrupales/Efectivo.jsx';
import TarjetaDebitoG from './Components/PGrupales/TarjetaDebito.jsx';
// SEGUNDA APP / GRUPALES - FINAL - MONTEROS 

// TERCER APP / PASE LIBRE - INICIO - MONTEROS  

import PrincipalPaseLibre from './Pages/Monteros/PrincipalPaseLibre.jsx';
import TransferenciaPL from './Components/PPaseLibre/Transferencia';
import EfectivoPL from './Components/PPaseLibre/Efectivo.jsx';
import TarjetaDebitoPL from './Components/PPaseLibre/TarjetaDebito.jsx';
// TERCER APP / PASE LIBRE - FINAL - MONTEROS 

// CUARTA APP / TRIMESTRALES - INICIO - MONTEROS  
import PrincipalTrimestrales from './Pages/Monteros/PrincipalTrimestrales.jsx';
import TransferenciaT from './Components/Trimestrales/Transferencia';
import EfectivoT from './Components/Trimestrales/Efectivo.jsx';
import TarjetaDebitoT from './Components/Trimestrales/TarjetaDebito.jsx';
// CUARTA APP / TRIMESTRALES - FINAL - MONTEROS  


// PRIMER APP / MUSCULACION - INICIO - Concepcion  
import PrincipalMusculacionConcep from './Pages/Concepcion/PrincipalMusculacion.jsx';
import TransferenciaConcep from './Components/Concepcion/PMusculacion/Transferencia';
import EfectivoConcep from './Components/Concepcion/PMusculacion/Efectivo.jsx';
import TarjetaDebitoConcep from './Components/Concepcion/PMusculacion/TarjetaDebito.jsx';
// PRIMER APP / MUSCULACION - FINAL - Concepcion 

// SEGUNDA APP / GRUPALES - INICIO - Concepcion  

import PrincipalGrupalesConcep from './Pages/Concepcion/PrincipalGrupales.jsx';
import TransferenciaGConcep from './Components/Concepcion/PGrupales/Transferencia';
import EfectivoGConcep from './Components/Concepcion/PGrupales/Efectivo.jsx';
import TarjetaDebitoGConcep from './Components/Concepcion/PGrupales/TarjetaDebito.jsx';
// SEGUNDA APP / GRUPALES - FINAL - Concepcion 

// TERCER APP / PASE LIBRE - INICIO - Concepcion  

import PrincipalPaseLibreConcep from './Pages/Concepcion/PrincipalPaseLibre.jsx';
import TransferenciaPLConcep from './Components/Concepcion/PPaseLibre/Transferencia';
import EfectivoPLConcep from './Components/Concepcion/PPaseLibre/Efectivo.jsx';
import TarjetaDebitoPLConcep from './Components/Concepcion/PPaseLibre/TarjetaDebito.jsx';
// TERCER APP / PASE LIBRE - FINAL - Concepcion 

// CUARTA APP / TRIMESTRALES - INICIO - Concepcion  
import PrincipalTrimestralesConcep from './Pages/Concepcion/PrincipalTrimestrales.jsx';
import TransferenciaTConcep from './Components/Concepcion/Trimestrales/Transferencia';
import EfectivoTConcep from './Components/Concepcion/Trimestrales/Efectivo.jsx';
import TarjetaDebitoTConcep from './Components/Concepcion/Trimestrales/TarjetaDebito.jsx';
// CUARTA APP / TRIMESTRALES - FINAL - Concepcion  
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="back">
        <Routes>
          {/* PRIMER APP / MUSCULACION - INICIO - MONTEROS */}
          <Route path="/" element={<PrincipalMusculacion />} />
          <Route
            path="/monteros/musculacion/tarjeta-debito"
            element={<TarjetaDebito />}
          />
          <Route
            path="/monteros/musculacion/transferencia"
            element={<Transferencia />}
          />
          <Route path="/monteros/musculacion/efectivo" element={<Efectivo />} />
          {/* PRIMER APP / MUSCULACION  - FINAL - MONTEROS  */}

          {/* SEGUNDA APP / GRUPALES - INICIO - MONTEROS  */}
          <Route path="/monteros/grupales" element={<PrincipalGrupales />} />
          <Route
            path="/monteros/grupales/tarjeta-debito"
            element={<TarjetaDebitoG />}
          />
          <Route
            path="/monteros/grupales/transferencia"
            element={<TransferenciaG />}
          />
          <Route path="/monteros/grupales/efectivo" element={<EfectivoG />} />
          {/* SEGUNDA APP / GRUPALES - FINAL - MONTEROS  */}

          {/* TERCER APP / PASE LIBRE - INICIO - MONTEROS  */}
          <Route path="/monteros/paselibre" element={<PrincipalPaseLibre />} />
          <Route
            path="/monteros/paselibre/tarjeta-debito"
            element={<TarjetaDebitoPL />}
          />
          <Route
            path="/monteros/paselibre/transferencia"
            element={<TransferenciaPL />}
          />
          <Route path="/monteros/paselibre/efectivo" element={<EfectivoPL />} />
          {/* TERCER APP / PASE LIBRE - FINAL - MONTEROS  */}

          {/* CUARTA APP / TRIMESTRALES - INICIO - MONTEROS  */}
          <Route
            path="/monteros/trimestrales"
            element={<PrincipalTrimestrales />}
          />
          <Route
            path="/monteros/trimestrales/tarjeta-debito"
            element={<TarjetaDebitoT />}
          />
          <Route
            path="/monteros/trimestrales/transferencia"
            element={<TransferenciaT />}
          />
          <Route
            path="/monteros/trimestrales/efectivo"
            element={<EfectivoT />}
          />
          {/* CUARTA APP / TRIMESTRALES - FINAL - MONTEROS  */}

          {/* PRIMER APP / MUSCULACION - INICIO - concepcion */}
          <Route path="/concepcion" element={<PrincipalMusculacionConcep />} />
          <Route
            path="/concepcion/musculacion/tarjeta-debito"
            element={<TarjetaDebitoConcep />}
          />
          <Route
            path="/concepcion/musculacion/transferencia"
            element={<TransferenciaConcep />}
          />
          <Route
            path="/concepcion/musculacion/efectivo"
            element={<EfectivoConcep />}
          />
          {/* PRIMER APP / MUSCULACION  - FINAL - concepcion  */}

          {/* SEGUNDA APP / GRUPALES - INICIO - concepcion  */}
          <Route
            path="/concepcion/grupales"
            element={<PrincipalGrupalesConcep />}
          />
          <Route
            path="/concepcion/grupales/tarjeta-debito"
            element={<TarjetaDebitoGConcep />}
          />
          <Route
            path="/concepcion/grupales/transferencia"
            element={<TransferenciaGConcep />}
          />
          <Route
            path="/concepcion/grupales/efectivo"
            element={<EfectivoGConcep />}
          />
          {/* SEGUNDA APP / GRUPALES - FINAL - concepcion  */}

          {/* TERCER APP / PASE LIBRE - INICIO - concepcion  */}
          <Route
            path="/concepcion/paselibre"
            element={<PrincipalPaseLibreConcep />}
          />
          <Route
            path="/concepcion/paselibre/tarjeta-debito"
            element={<TarjetaDebitoPLConcep />}
          />
          <Route
            path="/concepcion/paselibre/transferencia"
            element={<TransferenciaPLConcep />}
          />
          <Route
            path="/concepcion/paselibre/efectivo"
            element={<EfectivoPLConcep />}
          />
          {/* TERCER APP / PASE LIBRE - FINAL - concepcion  */}

          {/* CUARTA APP / TRIMESTRALES - INICIO - concepcion  */}
          <Route
            path="/concepcion/trimestrales"
            element={<PrincipalTrimestralesConcep />}
          />
          <Route
            path="/concepcion/trimestrales/tarjeta-debito"
            element={<TarjetaDebitoTConcep />}
          />
          <Route
            path="/concepcion/trimestrales/transferencia"
            element={<TransferenciaTConcep />}
          />
          <Route
            path="/concepcion/trimestrales/efectivo"
            element={<EfectivoTConcep />}
          />
          {/* CUARTA APP / TRIMESTRALES - FINAL - concepcion  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
