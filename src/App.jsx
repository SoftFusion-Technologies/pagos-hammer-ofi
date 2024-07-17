import Transferencia from './Components/Transferencia';
import PrincipalMusculacion from './Components/PrincipalMusculacion.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Efectivo from './Components/Efectivo.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import TarjetaCredito from './Components/TarjetaCredito.jsx';
import Cuotas from './Components/Cuotas.jsx';

  function App() {
    return (
      <Router>
        <ScrollToTop />
        <div className="back">
          <Routes>
            <Route path="/" element={<PrincipalMusculacion />} />
            <Route path="/cuotas" element={<Cuotas />} />
            <Route path="/tarjeta-credito" element={<TarjetaCredito />} />
            <Route path="/transferencia" element={<Transferencia />} />
            <Route path="/efectivo" element={<Efectivo />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
