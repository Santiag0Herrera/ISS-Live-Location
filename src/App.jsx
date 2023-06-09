import './App.css';
import React, { useEffect, useState } from 'react';
import Earth from './components/Globe/Globe';
import Display from './components/Display/Display';
import { getISSLocation } from './services/getISSLocation';

function App() {
  const [ISSdata, setISSdata] = useState({});

  useEffect(() => {
    // Función asincrónica para obtener la ubicación de ISS
    async function fetchISSData() {
      const data = await getISSLocation();
      setISSdata(data); // Guardar la ubicación actual de ISS en el estado
    }

    fetchISSData(); // Obtener la ubicación de ISS al cargar la aplicación

    setInterval(fetchISSData, 1000); // Actualizar la ubicación de ISS cada 3 segundos
  }, []);

  return (
    <div className="app-container">
      <div className="display-container">
        <Display ISSdata={ISSdata} />
      </div>
      <div className="earth-container">
        <Earth ISSdata={ISSdata} />
      </div>
    </div>
  );
}

export default App;
