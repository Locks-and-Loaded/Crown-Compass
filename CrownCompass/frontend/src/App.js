import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path ="/map" element={<MapPage/>} />
        </Routes>
      </Router>
  );
}

export default App;

