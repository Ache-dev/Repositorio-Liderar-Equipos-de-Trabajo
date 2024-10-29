import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/images/Logo.png';

function NavBar() {
  // Estado para controlar el menú desplegable en dispositivos móviles
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú en dispositivos móviles
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">Ache</span>
        </a>

        {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Links en desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-900 dark:text-white hover:text-red-700 dark:hover:text-red-500">
            Inicio
          </Link>
          <Link to="/Trabajos" className="text-gray-900 dark:text-white hover:text-red-700 dark:hover:text-red-500">
            Trabajos
          </Link>
          <Link to="/Sobre-Mi" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700">
            Sobre mí
          </Link>
        </div>
      </div>

      {/* Menú desplegable en dispositivos móviles */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="space-y-4 p-4">
            <li>
              <Link to="/" onClick={toggleMenu} className="block text-gray-900 dark:text-white hover:text-red-700 dark:hover:text-red-500">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Trabajos" onClick={toggleMenu} className="block text-gray-900 dark:text-white hover:text-red-700 dark:hover:text-red-500">
                Trabajos
              </Link>
            </li>
            <li>
              <Link to="/Sobre-Mi" onClick={toggleMenu} className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700">
                Sobre mí
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
