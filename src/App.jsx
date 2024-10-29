import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import './App.css';

function App() {
  return (
    <Router basename="/Repositorio-Liderar-Equipos-de-Trabajo"> {/* Cambia "mi-repo" por el nombre real de tu repositorio */}
      <div className="min-h-screen">
        <NavBar />
        <div className="flex-1 bg-gray-100 dark:bg-gray-900">
          <main className="p-6 text-center mx-auto max-w-7xl mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Sobre-Mi" element={<About />} />
              <Route path="/Trabajos" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
