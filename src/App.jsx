import React, { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';
// Import pages
import Dashboard from './pages/Dashboard';
import Sample from './pages/sample';
import SuitablePlace from './pages/GeospatialSolutions/SuitablePlace';
import AgriculturePlatform from './pages/GeospatialSolutions/AgriculturePlatform';
import Infrastructure from './pages/GeospatialSolutions/Infrastructure';
import UrbanMobility from './pages/GeospatialSolutions/UrbanMobility';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/sample" element={<Sample />} />
        
        {/* Geospatial Solutions  */}
        <Route exact path="/agriculture-platform" element={<AgriculturePlatform />} />
        <Route exact path="/infrastructure" element={<Infrastructure />} />
        <Route exact path="/urban-mobility" element={<UrbanMobility />} />
        <Route exact path="/suitable-place" element={<SuitablePlace />} />

      </Routes>
    </>
  );
}

export default App;
