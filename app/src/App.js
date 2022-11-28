import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages';
import Game from './pages/game';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <Router>
        <Routes>
            <Route exact path='/' element={<Index />} />
            <Route path='/game' element={<Game/>} />
        </Routes>
        </Router>
    );
  }
export default App;
