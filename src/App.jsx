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
import CuotasTrimestral from './Components/Trimestrales/CuotasTrimestral.jsx';
import TransferenciaT from './Components/Trimestrales/Transferencia';
import EfectivoT from './Components/Trimestrales/Efectivo.jsx';
import TarjetaDebitoT from './Components/Trimestrales/TarjetaDebito.jsx';
import TarjetaCredito from './Components/Trimestrales/TarjetaCredito.jsx';
// CUARTA APP / TRIMESTRALES - FINAL - MONTEROS  

// QUINTA APP / SEMESTRALES - INICIO - MONTEROS  
import PrincipalSemestrales from './Pages/Monteros/PrincipalSemestrales.jsx';
import TransferenciaS from './Components/Semestrales/Transferencia';
import EfectivoS from './Components/Semestrales/Efectivo.jsx';
import TarjetaDebitoS from './Components/Semestrales/TarjetaDebito.jsx';
import TarjetaCreditoS from './Components/Semestrales/TarjetaCredito.jsx';
import CuotasSemestral from './Components/Semestrales/CuotasSemestral.jsx'
// QUINTA APP / SEMESTRALES  - FINAL - MONTEROS  


// SEXTA APP / ANUAL - INICIO - MONTEROS  
import PrincipalAnual from './Pages/Monteros/PrincipalAnual.jsx';
import TransferenciaA from './Components/TTAnual/Transferencia';
import EfectivoA from './Components/TTAnual/Efectivo.jsx';
import TarjetaDebitoA from './Components/TTAnual/TarjetaDebito.jsx';
import TarjetaCreditoA from './Components/TTAnual/TarjetaCredito.jsx';
import CuotasAnual from './Components/TTAnual/CuotasAnual.jsx';

// SEXTA APP / ANUAL  - FINAL - MONTEROS  

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
import TarjetaCreditoConcep from './Components/Concepcion/Trimestrales/TarjetaCredito.jsx';
import CuotasTrimestralConcep from './Components/Concepcion/Trimestrales/CuotasTrimestral.jsx';
// CUARTA APP / TRIMESTRALES - FINAL - Concepcion


// QUINTA APP / SEMESTRALES - INICIO - Concepcion  
import PrincipalSemestralesConcep from './Pages/Concepcion/PrincipalSemestrales.jsx';
import TransferenciaSConcep from './Components/Concepcion/Semestrales/Transferencia';
import EfectivoSConcep from './Components/Concepcion/Semestrales/Efectivo.jsx';
import TarjetaDebitoSConcep from './Components/Concepcion/Semestrales/TarjetaDebito.jsx';
import TarjetaCreditoSConcep from './Components/Concepcion/Semestrales/TarjetaCredito.jsx'
import CuotasSemestralConcep from './Components/Concepcion/Semestrales/CuotasSemestral.jsx';
// QUINTA APP / SEMESTRALES  - FINAL - Concepcion  

// SEXTA APP / ANUAL - INICIO - Concepcion  
import PrincipalAnualConcep from './Pages/Concepcion/PrincipalAnual.jsx';
import TransferenciaAConcep from './Components/Concepcion/TTAnual/Transferencia';
import EfectivoAConcep from './Components/Concepcion/TTAnual/Efectivo.jsx';
import TarjetaDebitoAConcep from './Components/Concepcion/TTAnual/TarjetaDebito.jsx';
import CoutasAnualConcep from './Components/Concepcion/TTAnual/CuotasAnual.jsx'
import TarjetaCreditoAConcep from './Components/Concepcion/TTAnual/TarjetaCredito.jsx';
// SEXTA APP / ANUAL  - FINAL - Concepcion  

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
            path="/monteros/trimestrales/cuotas"
            element={<CuotasTrimestral />}
          />
          <Route
            path="/monteros/trimestrales/cuotas/tarjeta-credito"
            element={<TarjetaCredito />}
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

          {/* QUINTA APP / SEMESTRALES - INICIO - MONTEROS  */}
          <Route
            path="/monteros/semestrales"
            element={<PrincipalSemestrales />}
          />
          <Route
            path="/monteros/semestrales/cuotas"
            element={<CuotasSemestral />}
          />
          <Route
            path="/monteros/semestrales/cuotas/tarjeta-credito"
            element={<TarjetaCreditoS />}
          />
          <Route
            path="/monteros/semestrales/tarjeta-debito"
            element={<TarjetaDebitoS />}
          />
          <Route
            path="/monteros/semestrales/transferencia"
            element={<TransferenciaS />}
          />
          <Route
            path="/monteros/semestrales/efectivo"
            element={<EfectivoS />}
          />
          {/* QUINTA APP / SEMESTRALES - FINAL - MONTEROS  */}

          {/* SEXTA APP / ANUAL - INICIO - MONTEROS  */}
          <Route path="/monteros/anual" element={<PrincipalAnual />} />
          <Route path="/monteros/anual/cuotas" element={<CuotasAnual />} />
          <Route
            path="/monteros/anual/cuotas/tarjeta-credito"
            element={<TarjetaCreditoA />}
          />
          <Route
            path="/monteros/anual/tarjeta-debito"
            element={<TarjetaDebitoA />}
          />
          <Route
            path="/monteros/anual/transferencia"
            element={<TransferenciaA />}
          />
          <Route path="/monteros/anual/efectivo" element={<EfectivoA />} />
          {/* SEXTA APP / ANUAL - FINAL - MONTEROS  */}

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
            path="/concepcion/trimestrales/cuotas"
            element={<CuotasTrimestralConcep />}
          />
          <Route
            path="/concepcion/trimestrales/cuotas/tarjeta-credito"
            element={<TarjetaCreditoConcep />}
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

          {/* QUINTA APP / SEMESTRALES - INICIO - CONCEPCION  */}
          <Route
            path="/concepcion/semestrales"
            element={<PrincipalSemestralesConcep />}
          />
          <Route
            path="/concepcion/semestrales/cuotas"
            element={<CuotasSemestralConcep />}
          />
          <Route
            path="/concepcion/semestrales/cuotas/tarjeta-credito"
            element={<TarjetaCreditoSConcep />}
          />
          <Route
            path="/concepcion/semestrales/tarjeta-debito"
            element={<TarjetaDebitoSConcep />}
          />
          <Route
            path="/concepcion/semestrales/transferencia"
            element={<TransferenciaSConcep />}
          />
          <Route
            path="/concepcion/semestrales/efectivo"
            element={<EfectivoSConcep />}
          />
          {/* QUINTA APP / SEMESTRALES - FINAL - CONCEPCION  */}

          {/* SEXTA APP / ANUAL - INICIO - CONCEPCION  */}
          <Route path="/concepcion/anual" element={<PrincipalAnualConcep />} />
          <Route
            path="/concepcion/anual/tarjeta-debito"
            element={<TarjetaDebitoAConcep />}
          />
          <Route
            path="/concepcion/anual/cuotas"
            element={<CoutasAnualConcep />}
          />
          <Route
            path="/concepcion/anual/cuotas/tarjeta-credito"
            element={<TarjetaCreditoAConcep />}
          />
          <Route
            path="/concepcion/anual/transferencia"
            element={<TransferenciaAConcep />}
          />
          <Route
            path="/concepcion/anual/efectivo"
            element={<EfectivoAConcep />}
          />
          {/* SEXTA APP / ANUAL - FINAL - CONCEPCION  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
