import React, { useState } from 'react';
import Header from './components/Header';
import QuienesSomos from './components/QuienesSomos';
import Registro from './components/Registro';
import Comentarios from './components/Comentarios';
import './App.css';
import Inicio from './components/Inicio';
import Ubicacion from './components/Ubicacion';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  console.log(activeSection);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  const [showMap, setShowMap] = useState(false);
  const handleButtonClick = () => {
    setShowMap(!showMap);
  };
  
  return (
    <div className="container">
      <Header showSection={showSection} />
      <button onClick={toggleDarkMode}>Cambiar a modo oscuro</button>
      <br />
      <br />
      
    <div>
      <button onClick={handleButtonClick}>
        {showMap ? 'Ocultar Ubicación de Tienda' : 'Mostrar Ubicación de Tienda'}
      </button>
      
      {showMap && <Ubicacion />}
    </div>
    
      <main>
        {activeSection === 'home' && <Inicio />}
        {activeSection === 'quienes-somos' && <QuienesSomos />}
        {activeSection === 'registro' && <Registro />}
        {activeSection === 'comentarios' && <Comentarios />}
      </main>
      <footer>
        <p>© 2024 Xina Shop. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;