import Init from './Init';
import Calendario from './Calendario';
import Formularios from './Formularios'
import Noticias from './Noticias';
import ProjetoPedag from "./ProjetoPedag"
import './styler.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Init/>}/>
          <Route path="/calendario" element={<Calendario/>}/>
          <Route path="/formularios" element={<Formularios/>}/>
          <Route path="/noticias" element={<Noticias/>}/>
          <Route path="/projeto" element={<ProjetoPedag/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
