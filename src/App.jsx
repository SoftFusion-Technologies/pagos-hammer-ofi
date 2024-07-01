import Transferencia from './Components/Transferencia';
import PrincipalMusculacion from './Components/PrincipalMusculacion.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <div className="back">
          <Routes>
            <Route path="/" element={<PrincipalMusculacion />} />
            <Route path="/transferencia" element={<Transferencia />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
